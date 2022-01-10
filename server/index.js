const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const fileupload = require("express-fileupload");
const authRoute = require("./routes/authRoute.js");
const traineeProfileRoute = require("./routes/traineeProfileRoute.js");
const courseRoute = require("./routes/courseRoute.js");
const stripeRoute = require("./routes/stripe.js");
dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(fileupload());
app.use(morgan("common"));
const port = process.env.PORT || 5500;

// routes
app.use("/api/auth", authRoute);
app.use("/api/trainee", traineeProfileRoute);
app.use("/api/courses", courseRoute);
app.use("/api/checkout", stripeRoute);
app.listen(port, (req, res) => {
  console.log(`Server running on port ${port}`);
});
