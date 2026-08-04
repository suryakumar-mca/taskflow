const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const {validateCreateTask} = require("../validators/taskValidator");
const taskController = require("../controllers/taskController");

const router = express.Router();

router.post("/", authMiddleware, validateCreateTask, taskController.createTask);
router.get("/", authMiddleware, taskController.getTasks)
router.patch("/:id", authMiddleware, taskController.updateTask)
router.delete("/:id", authMiddleware, taskController.deleteTask)

module.exports = router;