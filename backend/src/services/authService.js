const users = require("../data/users");
const ApiError = require("../utils/ApiError");
const { hashPassword, comparePassword} = require("../utils/password")
const { generateToken } = require("../utils/jwt");
const userRepository = require("../repositories/userRepository");

const register = async function(userData){
    
    const {name, email, password} = userData

    //check for duplicate email
    const existingUser = await userRepository.findByEmail(email);

    if(existingUser){
        throw new ApiError(409, "EMAIL_ALREADY_EXISTS", "Email already exists.");
    }

    const hashedPassword = await hashPassword(password)

    const createdUser = await userRepository.createUser({
        name,
        email,
        password: hashedPassword
    });

    return createdUser;
}

const login = async (credentials) => {

    const { email, password } = credentials;

    const user = await userRepository.findByEmail(email);
    console.log("Logging user retrieved from postgres ->", user)

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