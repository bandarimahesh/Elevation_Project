const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const multer = require("multer");
const helmet = require("helmet");
const morgan = require("morgan");
const path = require("path");
const fileupload = require("express-fileupload");
const cookieParser = require("cookie-parser");
const authRoute = require("./routes/authRoute.js");
const traineeProfileRoute = require("./routes/traineeProfileRoute.js");
const courseRoute = require("./routes/courseRoute.js");
const stripeRoute = require("./routes/stripe.js");
const trainerRoute = require("./routes/trainerRoute.js");
dotenv.config();

const app = express();

// middleware
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(
  fileupload({
    useTempFiles: true,
  })
);
app.use("/images", express.static(path.join(__dirname, "/images")));

app.use(morgan("common"));
app.use(cookieParser());
const port = process.env.PORT || 5500;

// routes
app.use("/api/auth", authRoute);
app.use("/api/trainee", traineeProfileRoute);
app.use("/api/courses", courseRoute);
app.use("/api/checkout", stripeRoute);
app.use("/api/trainer", trainerRoute);

app.listen(port, (req, res) => {
  console.log(`Server running on port ${port}`);
});
