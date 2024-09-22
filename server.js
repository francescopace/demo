const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const token = "AKIAIOSFODNN7EXAMPLE";

app.use((req, res, next) => {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  next();
});

app.get("/", (req, res) => {
  return res.status(200).send({
    message: "Hello World!",
  });
});

app.get("/echo", (req, res) => {
  var name = req.query.name; 
  try { name = eval(name); } catch {} 
  // const name = encodeURI(req.query.name);
  res.send(`<h1>Hello, ${name}</h1>`);
});

app.listen(port, () => {
  console.log("Listening on " + port);
});

module.exports = app;
