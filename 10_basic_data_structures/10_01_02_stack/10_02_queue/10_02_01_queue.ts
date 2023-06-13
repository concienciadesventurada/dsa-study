// This is more precisely an array queue and not a generic way of implementing
// them, so better take it with a grain of salt

// A worthy thing to note in these particular implementation, is that there
// is no limit property, so the only error possible is to underflow the queue
// But the stack queue does have one.

// TODO: Implement generic type of Queue and learn: 
// TODO:  2. Stack
// TODO:  3. Circular
// TODO:  1. Linked

export default class Queue<T> {
  private queue: T[] = [];

  length(): number {
    return this.queue.length;
  }

  enqueue(item: T): void {
    this.queue.push(item);
  }

  dequeue(): T {
    if (this.isEmpty()) {
      throw new Error("Queue underflow");
    }

    return this.queue.shift() as T;
  }

  isEmpty(): boolean {
    return this.queue.length === 0;
  }

  peek(): T | null {
    if (this.isEmpty()) {
      return null;
    }

    return this.queue[0];
  }
}
