const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

router.get("/", (req, res) => {
    res.send("🚀 TaskFlow API is running.");
    //throw new Error("Testing global error handler");
});
router.get("/me",authMiddleware, (req,res) =>{
    res.json(req.user)
})

module.exports = router;