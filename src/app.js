const express = require("express");
var cors = require("cors");
const userRoutes = require("./routes/task.routes");
app.use(cors());
const app = express();

app.use(express.json());

app.use("/todo/", userRoutes);

module.exports = app;
