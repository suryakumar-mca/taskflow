const validateRegister = function(req,res,next){
    console.log("Logging req body-> ",req.body)

    const {name,email,password} = req.body;

    if(!name || !email || !password){

        return res.status(400).json({
            success: false,
            error: {
                code: "VALIDATION_ERROR",
                message: "Name, email and password are required."
            }
        });
    }

    next()
}

const validateLogin = (req, res, next) => {

    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({
            success: false,
            error: {
                code: "VALIDATION_ERROR",
                message: "Email and password are required."
            }
        });
    }

    next();
};

module.exports = {validateRegister , validateLogin}