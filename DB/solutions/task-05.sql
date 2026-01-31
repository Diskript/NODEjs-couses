-- Task 05: Aggregation and Grouping in SQL

-- TERMINAL COMMANDS USED:
-- Connect to PostgreSQL:
-- sudo -u postgres psql
--
-- Connect to todo_app database:
-- \c todo_app


-- STEP 1: Count Todos by Status

SELECT status, COUNT(*) AS count
FROM todos
GROUP BY status;


-- STEP 2: Count Todos per User

SELECT users.name, users.email, COUNT(todos.id) as todo_count
FROM users
LEFT JOIN todos ON users.id = todos.user_id
GROUP BY users.id, users.name, users.email;


-- STEP 3: Find Users with No Todos

SELECT users.name, users.email
FROM users
LEFT JOIN todos ON users.id = todos.user_id
WHERE todos.id IS NULL;


-- DESCRIPTION OF WORK:
-- 1. Used COUNT and GROUP BY to aggregate todos by status
-- 2. Used LEFT JOIN to count todos per user, including users with zero todos
-- 3. Used LEFT JOIN with WHERE IS NULL to find users without any todos
