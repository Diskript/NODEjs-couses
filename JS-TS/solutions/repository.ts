export class InMemoryRepository<T extends { id: number }> {
  // private storage
  private items: T[] = [];

  add(entity: T): T {
    if (this.items.length == 0) {
      this.items.push(entity);
      return entity;
    }

    if (this.items.some((item) => item.id === entity.id)) {
      throw new Error(`Item with id ${entity.id} already exists`);
    }

    this.items.push(entity);
    return entity;
  }

  update(id: number, patch: Partial<T>): T {
    if (this.items.length == 0) {
      throw new Error("repository is empty");
    }

    const index = this.items.findIndex((item) => item.id === id);

    if (index < 0) {
      throw new Error(`Item with id ${id} not found`);
    }

    this.items[index] = { ...this.items[index], ...patch };
    return this.items[index];
  }

  remove(id: number): void {
    if (this.items.length == 0) {
      throw new Error("repository is empty");
    }

    const index = this.items.findIndex((item) => item.id === id);

    if (index < 0) {
      throw new Error(`Item with id ${id} not found`);
    }

    this.items.splice(index, 1);
  }

  findById(id: number): T | undefined {
    // is id unique as it was before?
    if (this.items.length == 0) {
      throw new Error("repository is empty");
    }
    return this.items.find((item) => item.id === id);
  }

  findAll(): T[] {
    return this.items;
  }
}
