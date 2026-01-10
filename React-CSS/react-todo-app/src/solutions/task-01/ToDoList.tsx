import React from "react";
import { TodoListProps } from "../../types";

/**
 * Task 1: ToDoList Component
 *
 * Theory: React Components and Props
 *
 * React components are the building blocks of React applications. They are functions that return JSX
 * (JavaScript XML) to describe what should appear on the screen. Components can be either:
 *
 * 1. Function Components (modern approach) - like this one
 * 2. Class Components (older approach)
 *
 * Props (Properties) are how components receive data from their parent. Props are read-only and
 * should never be modified directly. They allow components to be reusable and configurable.
 *
 * Key Concepts:
 * - Components should be pure functions (same input = same output)
 * - Props are immutable (cannot be changed)
 * - Components can receive any type of data as props
 * - Use TypeScript interfaces to define prop types
 *
 * In this task, you'll create a component that displays a list of todos.
 * The component receives an array of todos as props and renders each one.
 */
export const ToDoList: React.FC<TodoListProps> = ({ todos }) => {
  if (!todos.length) {
    return <div>No todos available</div>;
  }

  return (
    <div>
      <h3>Todo List</h3>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span>{todo.title} - {todo.completed ? "completed" : "not completed"}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
