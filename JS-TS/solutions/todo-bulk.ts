import { Todo, TodoStatus } from "./types";

export function toggleAll(state: Todo[], completed: boolean): Todo[] {
  if (state == null) throw new Error("toggleAll: state is undefined or null");
  if (state.length === 0) throw new Error("toggleAll: state is empty");

  return state.map((todo) => ({
    ...todo,
    status: completed ? TodoStatus.COMPLETED : TodoStatus.PENDING,
  }));
}

export function clearCompleted(state: Todo[]): Todo[] {
  if (state == null)
    throw new Error("clearCompleted: state is undefined or null");
  if (state.length === 0) throw new Error("clearCompleted: state is empty");
  const newState = state.filter((todo) => (todo.status = TodoStatus.COMPLETED));
  if (newState.length === state.length) {
    throw new Error("clearCompleted: no completed todos found");
  } else {
    return newState;
  }
}

export function countByStatus(state: Todo[], status: TodoStatus): number {
  if (state == null)
    throw new Error("countByStatus: state is undefined or null");
  if (state.length === 0) throw new Error("countByStatus: state is empty");

  return state.filter((todo) => todo.status === status).length;
}
