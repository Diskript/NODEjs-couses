import React, { useState } from "react";
import { Todo } from "../../types";
import "./FilteredToDoList.css";

/**
 * Task 5: FilteredToDoList Component
 *
 * Theory: Derived State and Computed Values
 *
 * In React, you often need to compute values based on your state. These are called "derived state"
 * or "computed values" and should be calculated during render rather than stored in state.
 *
 * Why Use Derived State:
 * 1. Avoids state synchronization issues
 * 2. Reduces complexity by having a single source of truth
 * 3. Automatically updates when source data changes
 * 4. Prevents stale state bugs
 *
 * Common Derived State Patterns:
 *
 * Filtering:
 * - const activeTodos = todos.filter(todo => !todo.completed)
 * - const completedTodos = todos.filter(todo => todo.completed)
 *
 * Searching:
 * - const filteredTodos = todos.filter(todo =>
 *     todo.title.toLowerCase().includes(searchTerm.toLowerCase())
 *   )
 *
 * Sorting:
 * - const sortedTodos = [...todos].sort((a, b) => a.title.localeCompare(b.title))
 *
 * Aggregations:
 * - const completedCount = todos.filter(todo => todo.completed).length
 * - const totalCount = todos.length
 *
 * Multiple Filters:
 * - Use multiple filter conditions or combine them
 * - Consider using useMemo for expensive computations
 *
 * Key Concepts:
 * - Calculate derived values during render
 * - Don't store computed values in state
 * - Use useMemo for expensive calculations
 * - Keep state minimal and derive the rest
 */
export const FilteredToDoList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, title: "Learn React", completed: false },
    { id: 2, title: "Build Todo App", completed: true },
    { id: 3, title: "Write Tests", completed: false },
  ]);
  const [inputValue, setInputValue] = useState<string>("");
  const [filter, setFilter] = useState<"all" | "active" | "completed">("all");

  const handleAddTodo = () => {
    if (!inputValue.trim()) return;
    const newTodo: Todo = {
      id: Date.now(),
      title: inputValue,
      completed: false,
    };
    setTodos([...todos, newTodo]);
    setInputValue("");
  };

  const handleFilter = (filter: "all" | "active" | "completed") => {
    setFilter(filter);
  };

  const displayFilter = (filter: "all" | "active" | "completed") => {
    if (filter === "all") return todos;
    if (filter === "active") return todos.filter((todo) => !todo.completed);
    if (filter === "completed") return todos.filter((todo) => todo.completed);
  };

  const markCompleted = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  const filteredTodos = displayFilter(filter) || [];
  // TODO: Implement the FilteredToDoList component
  //
  // Requirements:
  // 1. Display a list of todos with add functionality
  // 2. Add filter buttons: "All", "Active", "Completed"
  // 3. Filter todos based on selected filter
  // 4. Use derived state for filtered results
  // 5. Add complete functionality for todos
  //
  // Example implementation:
  // const [todos, setTodos] = useState<Todo[]>([]);
  // const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('all');
  //
  // const filteredTodos = todos.filter(todo => {
  //   if (filter === 'active') return !todo.completed;
  //   if (filter === 'completed') return todo.completed;
  //   return true; // 'all' case
  // });

  return (
    <div>
      <div>
        <button className="filterButton" onClick={() => handleFilter("all")}>
          All
        </button>
        <button className="filterButton" onClick={() => handleFilter("active")}>
          Active
        </button>
        <button
          className="filterButton"
          onClick={() => handleFilter("completed")}
        >
          Completed
        </button>
      </div>
      <ul>
        {filteredTodos.map((todo) => (
          <li className="toDoItem" key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => markCompleted(todo.id)}
            />
            <span className={todo.completed ? "completed" : "uncompleted"}>
              {todo.title}
            </span>
          </li>
        ))}
      </ul>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleAddTodo();
        }}
      >
        <input
          type="text"
          placeholder="Add todo"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        ></input>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};
