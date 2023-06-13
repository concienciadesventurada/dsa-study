// Linked lists don't necessarily need to be sorted, and as a data structure
// they are capable of all procedures possible, although in not the best big O
// complexity. Basically its a non-contiguous array, where a node ()

export class Node<T> {
  constructor(public item: T, public next?: Node<T>) {}
}

export class SinglyLinkedList<T> {
  private head?: Node<T>;
  private tail?: Node<T>;
  private length: number;

  constructor() {
    this.head = undefined;
    this.tail = undefined;
    this.length = 0;
  }

  isEmpty(): boolean {
    return !this.head;
  }

  push(item: T): void {
    const node: Node<T> = new Node<T>(item);

    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }

    this.length++;
  }

  append(item: T): void {
    const node: Node<T> = new Node<T>(item);

    if (this.isEmpty()) {
      this.head = node;
    } else {
      this.tail!.next = node;
    }

    this.tail = node;
    this.length++;
  }
}

/* For the freecodecamp tutorial implementation but in TS

export class Node<T> {
  private item: Node<T>;
  private next: Node<T> | null;

  constructor(item: Node<T>) {
    this.item = item;
    this.next = null;
  }
}

// Of course this implementation is very manual and not optimal, bla bla bla
const a = new Node<string>('a');
// @ts-ignore
const b = new Node<string>('b');
// @ts-ignore
const c = new Node<string>('c');
// @ts-ignore
const d = new Node<string>('d');

const traverse = <T>(head: Node<T> | null): void => {
  if (head === null) return;

  console.log(head.item);
  traverse(head.next);
}

const linkedListItems = <T>(head: Node<T>) => {
  const linkedList: Node<T>[] = [];
  linkedList.push(head);
  fillValues(head, linkedList);
}

const fillValues = <T>(head: Node<T> | null, linkedList: Node<T>[]): void => {
  if (head === null) return;
  linkedList.push(head);
  fillValues(head.next, linkedList);
}

linkedListItems(a);

*/

