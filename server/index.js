const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const authRoute = require("./routes/authRoute.js");
const profileRoute = require("./routes/profileRoute.js");
dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan("common"));
const port = process.env.PORT || 5500;

// routes
app.use("/api/auth", authRoute);
app.use("/api/users/profile", profileRoute);

app.listen(port, (req, res) => {
  console.log(`Server running on port ${port}`);
});
