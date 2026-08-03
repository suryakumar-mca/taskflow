const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
    res.send("🚀 TaskFlow API is running.");
    //throw new Error("Testing global error handler");
});

module.exports = router;