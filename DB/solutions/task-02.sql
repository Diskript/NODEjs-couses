-- ============================================
-- Task 02: Basic CRUD Operations on Todos
-- ============================================

-- TERMINAL COMMANDS USED:
-- ----------------------
-- Connect to PostgreSQL:
-- sudo -u postgres psql
--
-- Connect to todo_app database:
-- \c todo_app


-- STEP 1: CREATE (Insert a new todo)

-- First, insert a user to reference
INSERT INTO users (name, email) 
VALUES ('John Doe', 'john@example.com');

-- Insert a new todo
INSERT INTO todos (title, description, status, user_id) 
VALUES ('Buy groceries', 'Milk, eggs, bread, and butter', 'active', 1);


-- STEP 2: READ (Select all todos)

SELECT * FROM todos;


-- STEP 3: UPDATE (Change the status of a todo)

UPDATE todos 
SET status = 'completed' 
WHERE id = 1;


-- STEP 4: DELETE (Remove a todo)

DELETE FROM todos 
WHERE id = 1;



-- DESCRIPTION OF WORK:

-- 1. Inserted a user first to satisfy foreign key constraint
-- 2. Created a new todo with title, description, status, and user_id
-- 3. Selected all todos to view the data
-- 4. Updated the status of todo with id=1 to 'completed'
-- 5. Deleted the todo with id=1
