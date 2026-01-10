import { TodoApi } from "./todo-api";
import { Todo } from "./types";

export class TodoService {
  constructor(private readonly api: TodoApi) {}

  async create(title: string, description = ""): Promise<Todo> {
    if (!title || title.trim() === "") {
      throw new Error("Title is required");
    }
    return this.api.add({
      title,
      description: description,
      status: undefined as any,
    });
  }

  async toggleStatus(id: number): Promise<Todo> {
    if (!id || id <= 0) {
      throw new Error("Valid ID is required");
    }
    const todos = await this.api.getAll();
    const todo = todos.find((t) => t.id === id);
    if (!todo) {
      throw new Error(`Todo with id ${id} not found`);
    }
    const newStatus = todo.status === 2 ? 0 : todo.status + 1;
    return this.api.update(id, { status: newStatus });
  }

  async search(keyword: string): Promise<Todo[]> {
    const todos = await this.api.getAll();
    if (!keyword) {
      return todos;
    }
    const lowerKeyword = keyword.toLowerCase();
    return todos.filter(
      (todo) =>
        todo.title.toLowerCase().includes(lowerKeyword) ||
        (todo.description &&
          todo.description.toLowerCase().includes(lowerKeyword)),
    );
  }
}
