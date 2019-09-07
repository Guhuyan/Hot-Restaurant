// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var customer = [
  {
    name: "reserve_name",
    phone_number: "reserve_phone",
    email: "reserve_email",
    unique_ID: "reserve_id"
  }
];

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
  return res.json(customer);
});
app.get("/api/waitlist", function(req, res) {
  return res.json(customer);
});

// Displays a single reservation, or returns false
app.get("/api/table/:customer", function(req, res) {
  var reserve = req.params.customer;

  console.log(reserve);

  for (var i = 0; i < customer.length; i++) {
    if (reserve === customer[i].routeName) {
      return res.json(customer[i]);
    }
  }

  return res.json(false);
});

app.post("/api/table", function(req, res) {
  var newReservation = req.body;

  console.log(newReservation);

  res.json(newReservation);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
