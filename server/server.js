const express = require("express");
const app = express();
const fetch = require("node-fetch");
const cookieSession = require("cookie-session");
const path = require("path");
const bodyParser = require("body-parser");
const userController = require('./controllers/userController.js');
const postController = require('./controllers/postController.js');

const PORT = process.env.PORT || 3000;

const client_id = "ba52815cf9a41762d41f";
const client_secret = "f91cc3eef185cf904920b4aa4c7deefc7345b954";
const cookie_secret = "postachio";

app.use(
  cookieSession({
    secret: cookie_secret,
  })
);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

async function getAccessToken(code) {
  const res = await fetch("https://github.com/login/oauth/access_token", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      client_id,
      client_secret,
      code,
    }),
  });
  const data = await res.text();
  const params = new URLSearchParams(data);
  return params.get("access_token");
}

async function getGithubUser(access_token) {
  const req = await fetch("https://api.github.com/user", {
    headers: {
      Authorization: `bearer ${access_token}`,
    },
  });
  const data = await req.json();
  return data;
}

app.get("/user/login/callback", async (req, res) => {
  const { query } = req;
  const { code } = query;
  const token = await getAccessToken(code);
  const githubData = await getGithubUser(token);
  if (githubData) {
    req.session.githubId = githubData.id;
    req.session.token = token;
    res.redirect("/main"); //need to change where to redirect to
  } else {
    console.log("Error");
    res.send("Error occurred");
  }
});

app.post("/register", userController.createUser, (req, res) => {
  res.status(200).json({}); // send something back to the frontend
})

app.post("/login", userController.verifyUser, (req, res) => {
  res.status(200).json(res.locals.login);
});

app.post("/createpost", postController.createPost, (req, res) =>  {
  res.status(200).json({});
});

app.delete("/deletepost", postController.deletePost, (req, res) => {
  res.status(200).json({}); // see what we have to send back
});

/*
might just need to get from react frontend
app.get("/main", (req, res) => {
  //should print actual feed from front end
  if (req.session.githubId) {
    res.send("Hello user <pre>" + JSON.stringify(req.session));
  } else {
    res.send("Not authorized, <a href='/login'>login</a>");
  }
});
*/

app.get("/logout", (req, res) => {
  req.session = null;
  res.redirect("/");
});

app.use("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/index.html"));
});

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
