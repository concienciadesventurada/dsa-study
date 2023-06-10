import unsortedArray from "../unsorted_array";

const merge = (left: number[], right: number[]): number[] => {
  let arr: number[] = [];
  let j = 0;
  let i = 0;

  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      // Although arr[k] = x and .push are O(1) there is a slight difference
      // in memory allocation because of JS runtime when using push that may
      // be noticeable in large (very large) arrays
      arr.push(left[i]);
      i++;
    } else {
      arr.push(right[j]);
      j++;
    }
  }

  // Once every element has been sorted, push both remainders if any to the arr
  while (i < left.length) {
    arr.push(left[i]);
    i++;
  }

  while (j < right.length) {
    arr.push(right[j]);
    j++;
  }

  // NOTE: Another possible return instead of the previous while loops is
  // return [...arr, ...left.slice(i), ...right.slice(j)];
  return arr;
};

const merge_sort = (arr: number[]): number[] => {
  if (arr.length <= 1) return arr;

  let middle = Math.floor(arr.length / 2);

  let leftArr = arr.slice(0, middle); // Copy the index up not including middle
  let rightArr = arr.slice(middle); // Copy from the middle to the end

  // The recursiveness comes from here, split the arr until the edge case
  // Merge it on your way back until you get to the greatest elements
  return merge(merge_sort(leftArr), merge_sort(rightArr));
};

const arr = unsortedArray(200);

console.log(arr);
console.log(merge_sort(arr))

// TASK: Exercises to think about as per GC's suggestions on Discord
// CHECK: 2.- Refactor properly to TS
// CHECK: 3.- Think in useful and descriptive names to p, q and r // CHECK:
