const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const authRoute = require("./routes/authRoute.js");
const traineeProfileRoute = require("./routes/traineeProfileRoute.js");
const courseRoute = require("./routes/courseRoute.js");
dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan("common"));
const port = process.env.PORT || 5500;

// routes
app.use("/api/auth", authRoute);
app.use("/api/trainee", traineeProfileRoute);
app.use("/api/courses", courseRoute);

app.listen(port, (req, res) => {
  console.log(`Server running on port ${port}`);
});
