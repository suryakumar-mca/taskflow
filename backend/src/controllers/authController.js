const authService = require("../services/authService")
const ApiResponse = require("../utils/ApiResponse")

const register = async (req, res) => {

    const user = await authService.register(req.body);

    return res.status(201).json(
        new ApiResponse(
            201,
            "User registered successfully.",
            user
        )
    );
};

const login = async (req, res) => {

    const result = await authService.login(req.body);

    return res.status(200).json(
        new ApiResponse(
            200,
            "Login successful.",
            result
        )
    );
};

module.exports = {register, login}