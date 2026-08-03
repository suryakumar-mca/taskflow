const express = require("express")
const authController = require("../controllers/authController")
const {validateRegister} = require("../validators/authValidator")

const router = express.Router()
router.post("/register", validateRegister, authController.register)

module.exports = router

