const express = require("express");
const cors = require("cors");
require("dotenv").config();
// db
const dbConnect = require("./config/dbConnect");
// importing routes
const userRoute = require("./routes/userRoute");
const adminRoute = require("./routes/adminRoute");
const doctorRoute = require("./routes/doctorsRoute");

dbConnect();

const app = express();
app.use(express.json());
// cors
app.use(cors());

// middlewares
app.use("/api/user", userRoute);
app.use("/api/admin", adminRoute);
app.use("/api/doctor", doctorRoute);

// port
const port = process.env.PORT || 5000;

app.get("/", (req, res) => res.send("Welcome to the APP"));
app.listen(port, () => console.log(`Node Express Server Started at ${port}!`));
