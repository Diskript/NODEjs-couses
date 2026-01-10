interface Todo {
    id: number 
    title: string
    description?: string
    status: TodoStatus
    createdAt: Date
}

type NewTodo = Partial<Omit<Todo, "id" | "createdAt">> & { title: string }

enum TodoStatus {
    PENDING,
    IN_PROGRESS,
    COMPLETED
}

export { Todo, TodoStatus, NewTodo };