import Stack from "./10_01_02_stack";

const stack = new Stack<number>(64);

const fillStack = (valuesToPush: number) => {
  for (let i = 0; i < valuesToPush; i++) {
    stack.push(i + 1);
  }
}

fillStack(64);
// stack.push(65); // BUG: You'd see how terminates the execution

const popStack = (valuesToPop: number) => {
  for (let i = 0; i < valuesToPop; i++) {
    stack.pop();
  }
  console.log(stack);
}

popStack(12);
console.log(stack);

const stackEmpty = new Stack<number>();

console.log("Empty stack with no limit\n", stackEmpty,"\nisEmpty:", stackEmpty.isEmpty());

// This will crash the program
stackEmpty.pop();

