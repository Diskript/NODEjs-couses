import React from "react";
import { TodoItemProps } from "../../types";
import "./ToDoItem.css";

/**
 * Task 2: ToDoItem Component
 *
 * Theory: Conditional Rendering and JSX
 *
 * Conditional rendering in React allows you to show different content based on certain conditions.
 * This is one of React's most powerful features, enabling dynamic and interactive UIs.
 *
 * 3. Logical OR (||): condition || fallback
 *    - Shows fallback if condition is false
 *    - Example: {title || 'Untitled'}
 *
 * 4. Switch-like patterns with multiple conditions
 *
 * JSX (JavaScript XML) is a syntax extension that allows you to write HTML-like code in JavaScript.
 * It gets compiled to regular JavaScript function calls.
 *
 * Key Concepts:
 * - JSX expressions must have a single parent element
 * - Use className instead of class for CSS classes
 * - Use camelCase for attributes (onClick, style, etc.)
 * - JavaScript expressions can be embedded using {}
 */
export const ToDoItem: React.FC<TodoItemProps> = ({ todo }) => {
  return (
    <li className={todo.completed ? "completedTodo" : "activeTodo"}>
      <span>{todo.title}</span>
      <span>{todo.completed ? " (Completed)" : " (Not Completed)"}</span>
    </li>
  );
};
