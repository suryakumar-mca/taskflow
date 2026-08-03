const authService = require("../services/authService")
const ApiResponse = require("../utils/ApiResponse")

const register = function(req, res){

    const user = authService.register(req.body);

    return res.status(201).json(
        new ApiResponse(
            201, "User registered successfully.", user
        )
    )
}

module.exports = {register,}