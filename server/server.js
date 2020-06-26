const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

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
});

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
