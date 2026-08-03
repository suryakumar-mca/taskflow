class ApiError extends Error {

    constructor(statusCode, code, message) {

        super(message);

        this.success = false;
        this.statusCode = statusCode;
        this.code = code;

    }

}

module.exports = ApiError;