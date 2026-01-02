interface Todo {
    id: number 
    title: string
    descriptin?: string
    status: TodoStatus
    createdAt: Date
}

type NewTodo = Omit<Todo, "id" | "createdAt">

enum TodoStatus {
    PENDING,
    IN_PROGRESS,
    COMPLETED
}

export { Todo, TodoStatus, NewTodo };