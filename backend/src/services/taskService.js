const ApiError = require("../utils/ApiError");
const taskRespository = require("../repositories/taskRepository")


const createTask = async function (taskText, userId){
    
    const createdTask = await taskRespository.createTask(taskText, userId)

    return createdTask;
}

const getTasks = async function(userId){

    const tasks = await taskRespository.getTasks(userId)

    return tasks

}

const updateTask = async function (userId, taskId, updatedData) {

    const task = await taskRespository.findById(userId, taskId)

    if (!task) {
        throw new ApiError(404, "TASK_NOT_FOUND", "Task not found")
    }

    const updatedTask = await taskRespository.update(userId, taskId, updatedData)

    return updatedTask
}


const deleteTask = async function(userId, taskId){

    const task = await taskRespository.findById(userId, taskId)

    if(!task){
        throw new ApiError(404,"TASK_NOT_FOUND", "Task not found")
    }

    const deletedTask = await taskRespository.remove(userId, taskId)
    return
}


module.exports = {
    createTask, getTasks, updateTask, deleteTask
};