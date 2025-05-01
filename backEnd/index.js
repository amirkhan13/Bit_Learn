const express = require("express");
const path = require("path");
const app = express();
const { db, collection } = require("./db/db");
require("dotenv").config();
const bcrypt = require("bcrypt");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "../frontEnd")));
app.use(express.static(path.join(__dirname, "../frontEnd/navBar")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontEnd/index.html"));
});

app.get("/html", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontEnd/navBar/html/html.html"));
});
app.get("/css", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontEnd/navBar/css/css.html")); 
});

app.get("/javascript", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontEnd/navBar/javascript/javascript.html"));
});

app.get("/python", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontEnd/navBar/python/python.html")); 
});

app.get("/php", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontEnd/navBar/php/php.html"));  
});

app.get("/cpp", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontEnd/navBar/cpp/cpp.html"));  
});

app.get("/java", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontEnd/navBar/java/java.html")); 
});

app.get("/dsa", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontEnd/navBar/dsa/dsa.html")); 
});

app.get("/video", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontEnd/videoComponent.html")); 
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontEnd/about.html"));
});



app.get("/login", (req, res) => {
  res.render("login");
});

app.get("/signup", (req, res) => {
  res.render("signup");
});
app.get("/roadmap", (req, res) => {
  res.render("roadmap");  
});

app.post("/signup", async (req, res) => {
  const data = {
    email: req.body.email,
    password: req.body.password,
  };

  const existingUser = await collection.findOne({ email: data.email });
  if (existingUser) {
    return res.render("signup", { error: "User already exists" });
  }else{

    
      const saltrounds = 10;
      const hashedPassword = await bcrypt.hash(data.password, saltrounds);
      data.password = hashedPassword;
    
      const userdata = await collection.insertMany(data); 
      console.log(userdata);
  }
  res.redirect('/login'); 
});

app.post("/login", async (req, res) => {
  try {
    const check = await collection.findOne({ email: req.body.email });
    
    if (!check) {
      return res.render("login", { error: "User not found" });  
    }
    
    const match = await bcrypt.compare(req.body.password, check.password);
    if (match) {
      res.redirect('/roadmap');
    } else {
      res.render("login", { error: "Wrong password or email" });  
    }
    
  } catch (error) {
    res.render("login", { error: "An error occurred: " + error.message });  
  }
});



const port = process.env.PORT || 5000;

const startServer = () => {
  db(); 
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
};

startServer();
