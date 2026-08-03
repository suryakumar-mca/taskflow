API Standards

1. URL Naming

2. Request Format

3. Success Response Format

4. Error Response Format

5. Authentication Standard

6. HTTP Status Code Guidelines

7. Validation Rules

8. Pagination Rules (Future)

9. Versioning Strategy (Future)

## URL Naming

| Category                               | URL Name       |
| -------------------------------------- | -------------- |
| User registration                      | /api/register  |
| User login                             | /api/login     |
| User logout                            | /api/logout    |
| Task insert, get all tasks             | /api/tasks     |
| Task update, completion status toggles | /api/tasks/:id |

## Status Codes

| Status Codes |                       |
| ------------ | --------------------- |
| 200          | OK                    |
| 201          | Created OK            |
| 204          | OK  no content        |
| 400          | Bad request           |
| 401          | Unauthorized          |
| 403          | Forbidden             |
| 404          | Resource not found    |
| 409          | Conflict              |
| 500          | Internal Server Error |

### Request Standards

- Request body must be JSON.
- Protected APIs require: Authorization: Bearer <jwt_token>
- GET requests should not contain request bodies.
- Resource identifiers should be passed as URL parameters.
	Example:   PATCH /api/tasks/:id


## Success Response Format

```
{
    "success": true,
    "data": {}
}
```

## Error Response Format
```
{
  "success": false,
  "error": {
    "code": "error code",
    "message": "Error message",
    "details": [
      {
        ...
      }
    ]
  }
}
```


## Authentication Standard

- JWT 
- Bearer Authentication
- Expires in 15 minutes
- All protected APIs require Auth Headers
### Validations

1. Email Standard :
	1. Must be valid
	2. Must be unique
	3. Unique 
	4. Required
		
2. Password Standard
	- Should be greater than 8 chars
	- Required


