const users = require("../data/users");
const ApiError = require("../utils/ApiError");

const register = function(userData){
    
    const {name, email, password} = userData

    //check for duplicate email
    const existingUser = users.find(
        user => user.email === email
    );

    if(existingUser){
        throw new ApiError(409, "EMAIL_ALREADY_EXISTS", "Email already exists.");
    }

    const newUser = {
        id: users.length + 1,
        name,
        email,
        password
    }

    //create new User
    users.push(newUser)

    // Return without password
    return {

        id: newUser.id,

        name: newUser.name,

        email: newUser.email

    };

};

module.exports = {register}