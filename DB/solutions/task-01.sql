
-- Task 01: Database Setup and Table Creation
-- TERMINAL COMMANDS USED:
-- ----------------------
-- Install PostgreSQL on Ubuntu:
-- sudo apt update
-- sudo apt install postgresql postgresql-contrib
--
-- Install DBeaver on Ubuntu:
-- sudo snap install dbeaver-ce
--
-- Start PostgreSQL service:
-- sudo systemctl start postgresql
--
-- Access PostgreSQL as postgres user:
-- sudo -u postgres psql


-- STEP 1: CREATE DATABASE

CREATE DATABASE todo_app;

-- Connect to the database (in psql: \c todo_app)

-- STEP 2: CREATE USERS TABLE

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- STEP 3: CREATE TODOS TABLE

CREATE TABLE todos (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    status VARCHAR(50) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    user_id INTEGER NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);



-- DESCRIPTION OF WORK:
-- 1. Installed PostgreSQL and DBeaver on Ubuntu
-- 2. Created a new database named 'todo_app'
-- 3. Created 'users' table with id, name, email, and created_at columns
-- 4. Created 'todos' table with id, title, description, status, created_at, and user_id columns
-- 5. Established foreign key relationship between todos.user_id and users.id
-- 6. Used SERIAL for auto-incrementing primary keys
-- 7. Set appropriate constraints (NOT NULL, UNIQUE) and defaults (CURRENT_TIMESTAMP)
