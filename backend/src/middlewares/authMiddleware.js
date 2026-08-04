const ApiError = require("../utils/ApiError");
const { verifyToken } = require("../utils/jwt");

const authMiddleware = (req, res, next) => {

    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return next(new ApiError(401,"UNAUTHORIZED","Authorization header is missing."));
    }

    const token = authHeader.split(" ")[1];

    try {

        const payload = verifyToken(token);
        console.log("Logging payload in auth middleware ->", payload)
        req.user = payload;
        next();

    } catch (error) {

        next(
            new ApiError(401,"INVALID_TOKEN","Invalid or expired token."));
    }
};

module.exports = authMiddleware;