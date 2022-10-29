const express = require("express");
const format = require("date-format");

const app = express();

const PORT = 4000 | process.env.PORT;

app.get("/", (req, res) => {
  res.status(200).send("<h1>hello world</h1>");
});

app.get("/api/v4/instagram", (req, res) => {
  const instagramSocial = {
    username: "rushikeshadhav",
    followers: 290,
    follows: 150,
    date: format.asString("hh:mm:ss", new Date()),
  };
  res.status(200).json(instagramSocial);
});

app.get("/api/v4/facebook", (req, res) => {
  const facebookSocial = {
    username: "rushikeshadhav",
    followers: 390,
    follows: 250,
    date: new Date(),
  };
  res.status(200).json(facebookSocial);
});

app.get("/api/v4/:token", (req, res) => {
  console.log(req.params.token);
  res.status(200).json({ params: req.params.token });
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
