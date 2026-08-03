# Database Design

## Identified Entities

1. User
2. Task

## Entity: User

Attributes :
1. ID - Number, auto generated, not null, unique
2. Username - String
3. Email - String, unique, not null
4. Password - String, not null
5. CreatedAt - timestamp at the time of creation


Constraints
1. Primary Key - ID

## Entity: Task

Attributes
1. ID -  Number, auto generated, not null, unique
2. Title - String, not null
3. Completed - boolean, default false
4. createdAt - timestamp at the time of creation
5. updatedAt - timestamp at the time of creation
6. UserID - Number,  not null, unique

Constraints
1. Primary Key - ID
2. Foreign Key - UserID (User.ID)

## Relationships

User (1) ------ (*) Task

#### Logging

Attributes
1. ID - Number, auto generated, not null, unique
2. API name - String
3. API method - String
4. API response code - number
5. Error message - String
6. userID - Number
7. createdAt - timestamp

Constraints
1. Primary Key - ID
2. Foreign Key - userID
