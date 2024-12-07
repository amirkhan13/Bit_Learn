const express = require("express");
const path = require("path");

const app = express();


const port = process.env.PORT || 3000;


app.use(express.static(path.join(__dirname, "../../frontEnd")));


app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../../frontEnd/index.html"));
});


app.get("/home", (req, res) => {
  res.sendFile(path.join(__dirname, "../../frontEnd/index.html"));  
});

app.get("/css", (req, res) => {
  res.sendFile(path.join(__dirname, "../../frontEnd/css.html"));
});

app.get("/javascript", (req, res) => {
  res.sendFile(path.join(__dirname, "../../frontEnd/javascript.html")); // 
});

app.get("/python", (req, res) => {
  res.sendFile(path.join(__dirname, "../../frontEnd/python.html")); // Update 
});

app.get("/php", (req, res) => {
  res.sendFile(path.join(__dirname, "../../frontEnd/php.html")); // Update 
});

app.get("/cpp", (req, res) => {
  res.sendFile(path.join(__dirname, "../../frontEnd/cpp.html")); // Update 
});

app.get("/java", (req, res) => {
  res.sendFile(path.join(__dirname, "../../frontEnd/java.html")); // Update 
});

app.get("/dsa", (req, res) => {
  res.sendFile(path.join(__dirname, "../../frontEnd/dsa.html")); // Update 
});

app.get("/video-tutorials", (req, res) => {
  res.sendFile(path.join(__dirname, "../../frontEnd/videoComponent.html")); // 
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "../../frontEnd/about.html"));
});

app.get("/signup", (req, res) => {
  res.sendFile(path.join(__dirname, "../../frontEnd/signup.html"));
});


app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "../../frontEnd/login.html"));
});


app.listen(port, () => {
  console.log(`Server started on port: ${port}...`);
});
