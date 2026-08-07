const ApiResponse = require("../utils/ApiResponse");
const taskService = require("../services/taskService");

const createTask = async (req, res) => {

    const task = await taskService.createTask(req.body.task, req.user.userId);

    return res.status(201).json(new ApiResponse(201,"Task created successfully.",task));

};

const getTasks = async (req, res) => {

    const userTasks = await taskService.getTasks(req.user.userId);

    return res.status(200).json(new ApiResponse(200, "Tasks fetched successfully.", userTasks));

};

const updateTask = async (req, res) => {

    const updatedTask = await taskService.updateTask(req.user.userId, req.params.id, req.body)

    return res.status(200).json(new ApiResponse(200,"Task updated successfully.",updatedTask)); 
}

const deleteTask = async (req, res) => {

    const deletedTask = await taskService.deleteTask(req.user.userId, req.params.id)

    return res.status(200).json(new ApiResponse(200,"Task deleted successfully.")); 
}

module.exports = {
    createTask, getTasks, updateTask, deleteTask
};