const express = require("express");
const {
  getAllTasks,
  createTasks,
  updateTasks,
  deleteTasks,
} = require("../controllers/tasks.controller");

const router = express.Router();

// obtener todass las tareas
router.get("/tasks", getAllTasks);
// Agregar una tarea
router.post("/tasks", createTasks);
// Actualizar una tarea
router.put("/tasks", updateTasks);
// ELiminar una tarea
router.delete("/tasks", deleteTasks);
//

module.exports = router;
