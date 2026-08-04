const ApiResponse = require("../utils/ApiResponse");
const taskService = require("../services/taskService");

const createTask = (req, res) => {

    const task = taskService.createTask(req.body.task, req.user.userId);

    return res.status(201).json(new ApiResponse(201,"Task created successfully.",task));

};

const getTasks = (req, res) => {

    const userTasks = taskService.getTasks(req.user.userId);

    return res.status(200).json(new ApiResponse(200, "Tasks fetched successfully.", userTasks));

};

const updateTask = (req, res) => {

    const updatedTask = taskService.updateTask(req.params.id, req.user.userId, req.body)

    return res.status(200).json(new ApiResponse(200,"Task updated successfully.",updatedTask)); 
}

const deleteTask = (req, res) => {

    const deletedTask = taskService.deleteTask(req.params.id, req.user.userId)

    return res.status(200).json(new ApiResponse(200,"Task deleted successfully.")); 
}

module.exports = {
    createTask, getTasks, updateTask, deleteTask
};