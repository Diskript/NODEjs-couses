-- Task 09: Implementing an Audit Log Trigger

-- TERMINAL COMMANDS USED:
-- Connect to PostgreSQL:
-- sudo -u postgres psql
--
-- Connect to todo_app database:
-- \c todo_app


-- STEP 1: Create the audit_log Table

CREATE TABLE audit_log (
    id SERIAL PRIMARY KEY,
    todo_id INTEGER NOT NULL,
    action VARCHAR(50) NOT NULL,
    changed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


-- STEP 2: Create a Trigger Function for Updates

CREATE OR REPLACE FUNCTION log_todo_update()
RETURNS TRIGGER AS $$
BEGIN
    INSERT INTO audit_log (todo_id, action)
    VALUES (NEW.id, 'UPDATE');
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create the trigger for updates
CREATE TRIGGER trigger_todo_update
AFTER UPDATE ON todos
FOR EACH ROW
EXECUTE FUNCTION log_todo_update();


-- STEP 3: Create a Trigger Function for Deletes

CREATE OR REPLACE FUNCTION log_todo_delete()
RETURNS TRIGGER AS $$
BEGIN
    INSERT INTO audit_log (todo_id, action)
    VALUES (OLD.id, 'DELETE');
    RETURN OLD;
END;
$$ LANGUAGE plpgsql;

-- Create the trigger for deletes
CREATE TRIGGER trigger_todo_delete
BEFORE DELETE ON todos
FOR EACH ROW
EXECUTE FUNCTION log_todo_delete();


-- DESCRIPTION OF WORK:
-- 1. Created audit_log table with id, todo_id, action, and changed_at columns
-- 2. Created trigger function log_todo_update() that inserts UPDATE records
-- 3. Created trigger trigger_todo_update that fires AFTER UPDATE on todos table
-- 4. Created trigger function log_todo_delete() that inserts DELETE records
-- 5. Created trigger trigger_todo_delete that fires BEFORE DELETE on todos table
-- 6. Used NEW.id for updates and OLD.id for deletes to capture the todo ID