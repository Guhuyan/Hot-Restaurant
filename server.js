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
    customer_name = ,
    phone_num = ,
    email =
}
];
app.get("/home.html", function(req, res) {
  res.json(path.join(__dirname, "/home.html"));
  console.log("Connected!");
});*/

app.post("/api/make", function (req, res) {

  var newReservation = req.body;

  console.log(newReservation);

  res.json(newReservation);
});

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
