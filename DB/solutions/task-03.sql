-- Task 03: Filtering and Sorting Todos with Raw SQL

-- TERMINAL COMMANDS USED:
-- Connect to PostgreSQL:
-- sudo -u postgres psql
--
-- Connect to todo_app database:
-- \c todo_app


-- STEP 1: Filter by Status

-- Select all active todos
SELECT * FROM todos 
WHERE status = 'active';

-- Select all completed todos
SELECT * FROM todos 
WHERE status = 'completed';


-- STEP 2: Sort by Creation Date

-- Sort by created_at ascending (oldest first)
SELECT * FROM todos 
ORDER BY created_at ASC;

-- Sort by created_at descending (newest first)
SELECT * FROM todos 
ORDER BY created_at DESC;


-- STEP 3: Search by Keyword

-- Search for 'meeting' in title or description
SELECT * FROM todos 
WHERE title ILIKE '%meeting%' OR description ILIKE '%meeting%';


-- DESCRIPTION OF WORK:
-- 1. Filtered todos by status using WHERE clause
-- 2. Sorted todos by creation date using ORDER BY with ASC and DESC
-- 3. Searched for keywords in title or description using ILIKE for case-insensitive matching
-- 4. Used % wildcards for partial string matching

