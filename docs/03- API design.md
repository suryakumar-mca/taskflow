## Global configuration

1. Protocol : http
2. Architectural style : REST JSON APIs
3. Base URL : http: to_be_decided_url/api/
4. Default content type : application/json

## Authorization

1. Mechanism : json web token in the HTTP authorization header using the bearer
2. Header Format: Authorization: Bearer <jwt_token>
3. Token lifetime : 15 minutes

## HTTP codes

| Status codes     | Meaning                       | Usage                                            |
| ---------------- | ----------------------------- | ------------------------------------------------ |
| 200 OK           | Request succeeded             | Fetching all tasks                               |
| 201 Created      | Resource created successfully | Creating a new task or<br>registering a new user |
| 204 No content   | Action success, no body       | user logout                                      |
| 400 Bad request  | Invalid usage                 | creating a task without title                    |
| 401 Unauthorized | Invalid or expired token      | accessing protected routes without valid token   |
| 404 Not found    | Resource does not exist       |                                                  |
| 500 Server error | Unhandled server error        | Unexpected errors                                |

## Endpoint specifications

## Endpoint Summary


| User Story and description   | Method | Endpoint       | Auth required |
| ---------------------------- | ------ | -------------- | ------------- |
| US 1 - Register an user      | POST   | /api/register  | No            |
| US 2 - Login an user         | POST   | /api/login     | No            |
| US 3 - Logout                | POST   | /api/logout    | Yes           |
| US 4 - Create a new task     | POST   | /api/tasks     | Yes           |
| US 5 - View all my tasks     | GET    | /api/tasks     | Yes           |
| US 6 - Edit my task content  | PATCH  | /api/tasks/:id | Yes           |
| US  7 - Delete a task        | DELETE | /api/tasks/:id | Yes           |
| US 8 & 9 - Toggle completion | PATCH  | /api/tasks/:id | Yes           |


### User Endpoints

URL : POST api/register
User story 1 : As a new user, I want to create / register my account, so that I can manage my tasks
Request body : 
```
	{
		  "email": "user@example.com",
		  "password": "SecurePassword123!"
	}
```
Response:
```
{
  "accessToken": "eyJhbGciOiJIUzI1Ni...",
  "user": {
    "id": "101",
    "email": "user@example.com"
  }
}
```
1. 201 Created → Returns { "id": "...", "email": "user@example.com" } along with auth token
2. 400 Bad Request → Validation error (e.g., password too short)
3. 409 Conflict → Email already registered

------------------------------------------------------------------------

URL : POST api/login
User story 2:  As a registered user, I want to log in so that I can access my personal dashboard securely.
Request body : 
```
	{
		  "email": "user@example.com",
		  "password": "SecurePassword123!"
	}
```
Response body:
	creates an jwt access token with expiry time of 15 minutes and the user details
```
{
  "accessToken": "eyJhbGciOiJIUzI1Ni...",
  "user": {
    "id": "101",
    "email": "user@example.com"
  }
}
```

Response codes:
1. 200 OK → Returns jwt token + user details
2. 400 Bad Request → Validation error (e.g., invalid password)

------------------------------------------------------------------------

URL : POST api/logout --> PENDING
User story 3 : As a logged-in user, I want to log out so that no one access it
Request body : 

Response:
1. 204 - no content logout

------------------------------------------------------------------------

### Task endpoints

URL : POST api/tasks/
User story 4 : As a logged-in user, I want to create a new task so that I can keep track of my work. 

Request body : 
```
	Authorization:Bearer <jwt_token>
	{
		  "title" : "Buy groceries",
	}
```
Response body:

```
{
  "message" : "task creation success" 
}
```

Response codes:
1. 200 OK → successfully created a task
2. 400 bad request -> duplicate task with the same title

------------------------------------------------------------------------


URL : GET api/tasks
User story 5 : As a logged-in user, I want to view all my tasks so that I can see everything I need to do. 
Request body : 
```
	Authorization:Bearer <jwt_token>
	None
```
Response body:

```
{
  "accessToken": "eyJhbGciOiJIUzI1Ni...",
  "tasks": {
	  {
		  "taskid": "101",
		  "title": "finish node js project",
		  "completed": false
	  },
	  {
		  "taskid": "102",
		  "title": "finish data analytics cource",
		  "completed": false
	  }
	}
}
```

Response codes:
1. 200 OK → Returns all the tasks under the user's id 

------------------------------------------------------------------------

URL : PATCH api/tasks/:taskID
User story 6: As a logged-in user, I want to edit a task so that I can correct or update it. 

Request body : 
```
	Authorization:Bearer <jwt_token>
	{
		  "title" : "Buy groceries along with cooking utensil"
		  "completed" : true
	}
```
Response body:
	
```
{
  "message" : "status updation success" 
}
```

Response codes:
1. 200 OK → successfully updated the completion status
2. 400 Bad request --> If any validation fails or an error

------------------------------------------------------------------------

URL : DELETE api/tasks/:taskID
User story 7 : As a logged-in user, I want to delete a task so that I can remove tasks I no longer need. 

Request body : 
```
	Authorization:Bearer <jwt_token>
	{
	}
```
Response body:
	
```
{
  "message" : "task successfully deleted" 
}
```

Response codes:
1. 200 OK → successfully deleted


------------------------------------------------------------------------


URL : PATCH api/tasks/:taskID
User story 8: As a logged-in user, I want to mark a task as completed so that I know it has been finished.
User story 9 : As a logged-in user, I want to mark a completed task as pending again so that I can continue working on it.

Request body : 
```
	Authorization:Bearer <jwt_token>
	{
		  "completed" : true
	}
```
Response body:
	
```
{
  "message" : "status updation success" 
}
```

Response codes:
1. 200 OK → successfully updated the completion status

------------------------------------------------------------------------



### VERSION HISTORY



| Version   | Changes made                                                                                                                                                                                                            |     |
| --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --- |
| version_2 | removed user id from all the API 's request body since it can be fetched from jwt token                                                                                                                                 |     |
|           | Changing of rest API endpoint names <br>**Previous** - <br>POST  /api/tasks/create<br>PATCH /api/tasks/update<br>**Now** - <br>POST   /api/tasks<br>GET    /api/tasks<br>PATCH  /api/tasks/:id<br>DELETE /api/tasks/:id |     |
|           | 2 APIs for toggling completion status are merged to one API - so the user stories 8 and 9 are now achieved in one API                                                                                                   |     |
|           | Auth token is mentioned in protected APIs                                                                                                                                                                               |     |
