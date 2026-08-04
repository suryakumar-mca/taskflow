const validateCreateTask = (req, res, next) => {

    const { task } = req.body;

    if (!task) {
        return res.status(400).json({
            success: false,
            error: {
                code: "VALIDATION_ERROR",
                message: "Task is required."
            }
        });
    }

    next();

};

module.exports = {
    validateCreateTask
};