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

/*var customer = [
{
    customer_name = document.getElementById("customer_name").value,
    phone_num = document.getElementById("phone_num").value,
    email = document.getElementById("email").value
}
];
app.get("/home.html", function(req, res) {
  res.json(path.join(__dirname, "/home.html"));
});*/

// Displays a single reservation, or returns false
app.get("/api/make/:customer", function(req, res) {
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
