-- Task 06: Indexes and Query Optimization

-- TERMINAL COMMANDS USED:
-- Connect to PostgreSQL:
-- sudo -u postgres psql
--
-- Connect to todo_app database:
-- \c todo_app


-- STEP 1: Create Indexes

-- Create index on status column
CREATE INDEX idx_todos_status ON todos(status);

-- Optional: Create index on user_id for faster joins
CREATE INDEX idx_todos_user_id ON todos(user_id);


-- STEP 2: Analyze Query Performance

-- Analyze query execution plan
EXPLAIN SELECT * FROM todos WHERE status = 'active';

-- Analyze with actual execution statistics
EXPLAIN ANALYZE SELECT * FROM todos WHERE status = 'active';

-- Compare performance with a join query
EXPLAIN ANALYZE 
SELECT users.name, todos.title, todos.status
FROM todos
JOIN users ON todos.user_id = users.id
WHERE todos.status = 'active';


-- DESCRIPTION OF WORK:
-- 1. Created index on status column to speed up filtering queries
-- 2. Created index on user_id to optimize join operations
-- 3. Used EXPLAIN to view query execution plan
-- 4. Used EXPLAIN ANALYZE to see actual execution time and statistics
--
-- ISSUES ENCOUNTERED:
-- - None. Indexes created successfully and query plans analyzed.
