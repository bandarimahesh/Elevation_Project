const router = require("express").Router();
const connection = require("../dbConnection.js");

router.post("/login", function (req, res) {
  res.send("<h1>Hello i am from login page!</h1>");
});

router.get("/register", function (req, res) {
  res.send("<h1>Hello i am from register page!</h1>");
  connection.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
  });
});
module.exports = router;
