const express = require("express");
const healthRoutes = require("./healthRoutes");
const authRoutes = require("./authRoutes")
const taskRoutes = require("./taskRoutes")

const router = express.Router();

router.use("/", healthRoutes);
router.use("/api/auth/", authRoutes)
router.use("/api/tasks/", taskRoutes)

module.exports = router;