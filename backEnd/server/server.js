const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 6000;

// Serve static assets (CSS, JS, images)
app.use(express.static(path.join(__dirname, "./frontEnd")));

// Route to serve the main HTML file
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./frontEnd/index.html"));
});

app.listen(port, () => {
  console.log(`Server started on port: ${port}...`);
});
