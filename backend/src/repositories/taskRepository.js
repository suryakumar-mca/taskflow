const pool = require("../config/database")

const createTask = async function(taskText, userId){

    const result = await pool.query(
        `
        INSERT INTO tasks (user_id, task)
        VALUES ($1, $2)
        RETURNING id, user_id, task, completed, created_at
        `,
        [userId,taskText]
    )

    return result.rows[0];
}

const getTasks = async function(userId){

    const result = await pool.query(
        `
        SELECT * 
        FROM tasks
        WHERE user_id = $1
        `, [userId]
    )

    return result.rows
}

const findById = async function (userId, taskId) {

    const result = await pool.query(
        `
        SELECT * 
        FROM tasks
        WHERE user_id = $1 AND id = $2
        `,[userd,taskId]
    )

    return result.rows[0]
    
}

const update = async function(userId, taskId, updatedTaskData){

    const updatedTask = updatedTaskData.task 
    const completed = updatedTaskData.completed

    const result = await pool.query(
        `
        UPDATE tasks
        SET 
            task = COALESCE($3, task),
            completed = COALESCE($4, completed),
            updated_at = CURRENT_TIMESTAMP
        WHERE user_id = $1 AND id = $2
        RETURNING id, user_id, task, completed, created_at, updated_at
        `,[userId, taskId, updatedTask, completed]
    )

    return result.rows[0]
}

const remove = async function(userId, taskId){

    const result = await pool.query(
        `
        DELETE 
        FROM tasks
        WHERE user_id = $1 AND id = $2
        `,[userId,taskId]
    )

    return
}

module.exports = { createTask, getTasks, findById, update, remove }