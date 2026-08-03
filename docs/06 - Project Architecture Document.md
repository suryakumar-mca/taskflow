# Project Architecture:

Architecturally, a clean backend design relies on the **Separation of Concerns (SoC)** principle. The fundamental rule is simple: **no single file or directory should try to do everything.**

By isolating logic into specific layers, our application remains testable, scalable, and easy to maintain as it grows.

Here is the breakdown of what goes inside each folder, why it exists, and how data flows through them.

## Folder Structure

backend/
	--- src/
		 ---config/
		 ---controllers/
		 ---middleware/
		 ---models/
		 ---routes/
		 ---services/
		 ---validators/
		 ---utils/
		 ---logs/
		 ---index.js

---

## Folder Responsibilities

### config/

Stores the items that configure the application.

**what lives here:** 
- Environment variables
- Port number
- Database connection
- JWT secret
- Logger settings if any

---

### controllers/

**What lives here:** Functions that handle the HTTP layer: parsing request inputs (`req.body`, `req.params`), calling the appropriate service, and sending back the HTTP response (`res.status(200).json(...)`).

Files:
1. authController.js
2. userController.js
3. taskController.js

---

### middleware/

**What lives here:** Custom Express middleware functions that intercept incoming requests _before_ they reach the main controller logic
Files : 
1. authMiddleware.js

---

### models/

**What lives here:** Database models and ORM schema definitions representing application entities. (Prisma schemas, or TypeORM entities).

Files:
1. User.js
2. Task.js

---

### routes/

What lives here : Express router definitions that map HTTP methods.
files:
- userRoutes.js
- taskRoutes.js

---


### services/

**What lives here:** Core business logic and rules. This includes calculating task metrics, interacting with models, triggering email notifications, or handling transaction logic.

Files:
1. authService.js
2. userService.js
3. taskService.js

---

### validators/

**What lives here:** Schema definitions and validation scripts (using  **express-validator**) that check incoming request data (`req.body`, `req.params`, `req.query`).

---
### utils/

**What lives here:** Small, pure helper functions that are stateless and independent of business domain logic (e.g., date formatters, custom string manipulators, password hashing wrappers).

---

### logs/

Log files (e.g., `combined.log`, `error.log`) generated at runtime by logging libraries like **Winston** or **Pino**.

---


### index.js

**What lives here:** The main entry point of the Node.js application. It initializes the Express application, applies global middleware, mounts main routers, connects to the database, and starts the HTTP server listening on a port.

