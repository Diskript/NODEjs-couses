import { InMemoryRepository } from "./repository";
import { Todo, NewTodo } from "./types";
import { createTodo } from "./todo-factory";

class TodoNotFoundError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "TodoNotFoundError";
  }
}
export class TodoApi {
  private repo = new InMemoryRepository<Todo>();

  async getAll(): Promise<Todo[]> {
    if (!this.repo) throw new Error("repo is undefined or null");
    return new Promise<Todo[]>((resolve) =>
      setTimeout(() => {
        resolve(this.repo.findAll());
      }, 300),
    );
  }

  async add(newTodo: NewTodo): Promise<Todo> {
    const todo = createTodo(newTodo);
    return new Promise<Todo>((resolve) =>
      setTimeout(() => {
        resolve(this.repo.add(todo));
      }, 300),
    );
  }

  async update(
    id: number,
    update: Partial<Omit<Todo, "id" | "createdAt">>,
  ): Promise<Todo> {
    const todo = this.repo.findById(id);
    if (!todo) throw new TodoNotFoundError("todo not found");
    const updatedTodo = this.repo.update(id, update);
    return new Promise<Todo>((resolve) =>
      setTimeout(() => {
        resolve(updatedTodo);
      }, 300),
    );
  }

  async remove(id: number): Promise<void> {
    const todo = this.repo.findById(id);
    if (!todo) throw new TodoNotFoundError("todo not found");
    return new Promise<void>((resolve) =>
      setTimeout(() => {
        this.repo.remove(id);
        resolve();
      }, 300),
    );
  }
}
