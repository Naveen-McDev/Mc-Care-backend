const express = require("express");
const cors = require("cors");
require("dotenv").config();
const dbConnect = require("./config/dbConnect");
dbConnect();
const app = express();
app.use(express.json());
app.use(cors());
const port = process.env.PORT || 5000;

app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`Node Express Server Started at ${port}!`));
