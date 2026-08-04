const users = require("../data/users");
const ApiError = require("../utils/ApiError");
const { hashPassword, comparePassword} = require("../utils/password")
const { generateToken } = require("../utils/jwt");

const register = async function(userData){
    
    const {name, email, password} = userData

    //check for duplicate email
    const existingUser = users.find(
        user => user.email === email
    );

    if(existingUser){
        throw new ApiError(409, "EMAIL_ALREADY_EXISTS", "Email already exists.");
    }

    const hashedPassword = await hashPassword(password)

    const newUser = {
        id: users.length + 1,
        name,
        email,
        password : hashedPassword
    }

    //create new User
    users.push(newUser)
    console.log("Logging Data store =>", users)

    // Return without password
    return {
        id: newUser.id,
        name: newUser.name,
        email: newUser.email
    };
};

const login = async (credentials) => {

    const { email, password } = credentials;

    const user = users.find(user => user.email === email);

    if (!user) {
        throw new ApiError(401, "INVALID_CREDENTIALS", "Invalid email or password.");
    }

    const passwordMatches = await comparePassword( password, user.password);

    if (!passwordMatches) {
        throw new ApiError( 401, "INVALID_CREDENTIALS", "Invalid email or password.");
    }

    const token = generateToken(user.id);

    return {
        token,
        user: {
            id: user.id,
            name: user.name,
            email: user.email
        }
    };
};

module.exports = {register, login}