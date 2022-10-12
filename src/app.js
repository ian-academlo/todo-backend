const express = require("express");
const userRoutes = require("./routes/task.routes");

const app = express();

app.use(express.json());

app.use("/todo/", userRoutes);

module.exports = app;
