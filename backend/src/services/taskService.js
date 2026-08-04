const tasks = require("../data/tasks");
const ApiError = require("../utils/ApiError");

const createTask = (taskText, userId) => {

    const newTask = {
        id: tasks.length + 1,
        userId,
        task: taskText,
        completed: false
    };

    tasks.push(newTask);

    return {
        id: newTask.id,
        task: newTask.task,
        completed: newTask.completed
    };

};

const getTasks = (userId) => {

    return tasks
        .filter(task => task.userId === userId)
        .map(task => ({
            id: task.id,
            task: task.task,
            completed: task.completed
        }));

};

const updateTask = (taskId, userId, updatedData) =>{

    console.log("Logging task database in update service->", tasks)
    console.log("Logging parameters ->", taskId, userId, updatedData)

    const task = tasks.find(task => task.id === Number(taskId));

    if(!task){
        throw new ApiError(404,"TASK_NOT_FOUND", "Task not found")
    }

    if(task.userId !== userId){
        throw new ApiError(403, "FORBIDDEN", "You are not allowed to modify this task.")
    }

    if(updatedData.task !== undefined){
        task.task = updatedData.task
    }

    if(updatedData.completed !== undefined){
        task.completed = updatedData.completed
    }

    return {
        id: task.id,
        task: task.task,
        completed: task.completed
    };

}

const deleteTask = (taskId, userId) =>{

    const task = tasks.find(task => task.id === Number(taskId))

    if(!task){
        throw new ApiError(404,"TASK_NOT_FOUND", "Task not found")
    }

    if(task.userId !== userId){
        throw new ApiError(403, "FORBIDDEN", "You are not allowed to modify this task.")
    }

    const taskIndexToDelete = tasks.findIndex((task) => task.id === Number(taskId))

    tasks.splice(taskIndexToDelete,1)

    return
    

}


module.exports = {
    createTask, getTasks, updateTask, deleteTask
};