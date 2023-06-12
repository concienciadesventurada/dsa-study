// INFO: Stacks
// LIFO => procedures of insertion and deletion are PUSH and POP

// They work by keeping track of basically two indexes:
//   1) the last element pushed
//   2) the length of the stack known as limit.
// Cormen et all book shows in pseudocode the three basic procedures: pop,
// push and isStackEmpty. However, a couple more are added here to really
// work as a show the restrictions the Stack implements and how to enforce
// the LIFO policy properly.

export default class Stack<T> {
  private stack: T[] = [];
  private limit: number;

  // If no number is provided, it'll take JS 1.79E+308 as limit
  constructor(limit: number = Number.MAX_VALUE) {
    this.limit = limit;
  }

  length(): number {
    return this.stack.length;
  }

  // The basic procedure, insert an element, the basic validation is to not
  // exceed the stack's limit, if not, THEN inserts at the end of the stack
  // the value provided.
  push(value: T) {
    if (this.length() + 1 > this.limit) {
      throw new Error("Stack overflow");
    }
    this.stack.push(value);
  }

  // The deletion procedure, checks if the length of the stack or how many
  // elements currently holds, is not 0, since that would mean that there
  // are no elements in the stack and no items could be deleted.
  pop(): T {
    if (this.length() !== 0) {
      return this.stack.pop() as T;
    }
    throw new Error("Stack underflow");
  }

  // This method returns the last element pushed to the stack, note that
  // it can return null if the stack is empty
  top(): T | null {
    if (this.length() !== 0) {
      return this.stack[this.length() - 1];
    }
    return null;
  }

  // A simple boolean that ensures that the stack is in fact empty
  isEmpty(): boolean {
    return this.length() === 0;
  }
}

