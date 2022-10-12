const express = require("express");
var cors = require("cors");
const userRoutes = require("./routes/task.routes");
const app = express();

app.use(cors());
app.use(express.json());

app.use("/todo/", userRoutes);

module.exports = app;
