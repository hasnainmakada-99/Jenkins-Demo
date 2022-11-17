const express = require("express");
const app = express();
const parser = require("body-parser");
app.use(parser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.write("<h1>Hello World</h1>");
});

app.listen(3000, () => {
  console.log("Listening on 3000");
});
