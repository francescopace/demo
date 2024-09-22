const express = require("express");
const app = express();
const escapeHtml = require("escape-html");

const port = process.env.PORT || 5000;

app.use((req, res, next) => {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  next();
});


app.get("/", (req, res) => {
  return res.status(200).send({
    message: "Hello World!",
  });
});

// Cross-Site Scripting (XSS) Vulnerabilities: localhost:5000/?name=<script>alert('XSS')</script>
app.get("/xss", (req, res) => {
  //const name = req.query.name;
  const name = escapeHtml(req.query.name);
  res.send(`<h1>Hello, ${name}</h1>`);
});

app.listen(port, () => {
  console.log("Listening on " + port);
});



module.exports = app;
