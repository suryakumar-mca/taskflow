const pool = require("../config/database")

const findByEmail = async function(email){

    const result = await pool.query(

        `SELECT *
         FROM USERS 
         WHERE email = $1 `, [email]

    )

    return result.rows[0]
}

const createUser = async ({ name, email, password }) => {

    const result = await pool.query(

        `
        INSERT INTO users (name, email, password)
        VALUES ($1, $2, $3)
        RETURNING id, name, email, created_at, updated_at
        `,

        [name, email, password]

    );

    return result.rows[0];

};

module.exports = {findByEmail, createUser}