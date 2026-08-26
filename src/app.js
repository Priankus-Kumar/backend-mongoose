const express = require("express");
const connectdb = require("./config/db");
const app = express();

app.use(express.json())
connectdb()


app.get("/", (req, res) => {
  res.send("got it.");
});

module.exports = app;
