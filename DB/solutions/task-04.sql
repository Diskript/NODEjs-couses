-- Task 04: Creating a Users Table and Linking Todos to Users with a Foreign Key

-- TERMINAL COMMANDS USED:
-- Connect to PostgreSQL:
-- sudo -u postgres psql
--
-- Connect to todo_app database:
-- \c todo_app


-- STEP 1: Create the users Table

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


-- STEP 2: Alter the todos Table

-- Add user_id column to todos table
ALTER TABLE todos 
ADD COLUMN user_id INTEGER NOT NULL;

-- Add foreign key constraint
ALTER TABLE todos 
ADD CONSTRAINT fk_todos_user 
FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE;


-- DESCRIPTION OF WORK:
-- 1. Created users table with id, name, email, and created_at columns
-- 2. Added user_id column to todos table
-- 3. Established foreign key relationship between todos.user_id and users.id
-- 4. Used ON DELETE CASCADE to automatically delete todos when a user is deleted
--
-- ISSUES ENCOUNTERED:
-- - Note: If todos table already has data, you may need to populate user_id values
--   before adding the NOT NULL constraint, or temporarily make it nullable.
