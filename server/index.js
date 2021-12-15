const express = require("express");
const dotenv = require("dotenv");
dotenv.config();

const app = express();

app.use(express.json());
const port = process.env.PORT || 5500;
app.get("/", (req, res) => {
  res.send("<h1>Hello i am from backend!</h1>");
});
app.listen(port, (req, res) => {
  console.log(`Server running on port ${port}`);
});
