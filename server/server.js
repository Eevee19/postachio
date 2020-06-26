const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

const client_id = "ba52815cf9a41762d41f";
const client_secret = "f91cc3eef185cf904920b4aa4c7deefc7345b954";

app.get("/github", (req, res) => {
  //redirect to github authorization link
  const uri = `https://github.com/login/oauth/authorize?client_id=${client_id}&redirect_uri=http://localhost:3000/user/login/callback`;

  res.redirect(uri);
});
app.get("/user/login/callback", (req, res) => {
  const { query } = req;
  const { code } = query;

  if (!code) {
    return res.send({
      success: false,
      message: "Error: No code",
    });
  }
  console.log("code", code);

  //make a post request
});

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
