import { Todo } from "./types";

export function addTodo(state: Todo[], todo: Todo): Todo[] {
  const newTodoList = [...state];
  newTodoList.push(todo);
  return newTodoList;
}

export function updateTodo(
  state: Todo[],
  id: number,
  update: Partial<Omit<Todo, "id" | "createdAt">>,
): Todo[] {
  if (state == null) throw new Error("updateTodo: state is undefined or null");
  if (state.length === 0) throw new Error("updateTodo: state is empty");

  for (let todo of state) {
    if (todo.id === id) {
      const updatedTodo = { ...todo, ...update };
      const newState = [...state];
      const index = newState.findIndex((t) => t.id === id);
      newState[index] = updatedTodo;
      return newState;
    }
  }
  throw new Error("updateTodo: todo not found");
}

export function removeTodo(state: Todo[], id: number): Todo[] {
  if (state == null) throw new Error("removeTodo: state is undefined or null");
  if (state.length === 0) throw new Error("removeTodo: state is empty");
  for (let todo of state) {
    if (todo.id === id) {
      const newTodoList = [...state];
      newTodoList.splice(state.indexOf(todo), 1);
      return newTodoList;
    }
  }
  throw new Error("removeTodo: todo id not found");
}

export function getTodo(state: Todo[], id: number): Todo | undefined {
  for (let todo of state) {
    if (todo.id === id) {
      return todo;
    }
  }
  throw new Error("getTodo: todo id not found");
}
