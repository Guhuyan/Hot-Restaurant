// Dependencies
// =============================================================
var express = require("express");
var path = require("path");
var newReservation = [];

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
});
app.get("/tables", function(req, res) {
  res.sendFile(path.join(__dirname, "view.html"));
});
app.get("/reserve", function(req, res) {
  res.sendFile(path.join(__dirname, "make.html"));
});

// Displays all characters
app.get("/api/tables", function(req, res) {
  return res.json(newReservation);
});
app.get("/api/waitlist", function(req, res) {
  return res.json(newReservation);
});

app.post("/api/tables", function(req, res) {
  var newReservation = req.body;

  console.log(newReservation);

  res.json(newReservation);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
