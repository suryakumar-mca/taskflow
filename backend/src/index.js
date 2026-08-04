require("dotenv").config()
const express = require("express");
const routes = require("./routes")
const errorHandler = require("./middlewares/errorHandler");
const logger = require("./config/logger")

logger.info("TaskFlow backend started.");
const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.json())
app.use(routes)
app.use(errorHandler)

app.listen(PORT, () => {
    console.log(`🚀 TaskFlow API is running on http://localhost:${PORT}`);
});