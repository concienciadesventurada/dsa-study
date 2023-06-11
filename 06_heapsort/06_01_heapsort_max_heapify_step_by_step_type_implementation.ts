// PERF: AVG TIME EXECUTION => O(n log n) - Like a mix between merge and ins.
// PERF: Sorting at place - Insertion sort => O(n^2)
// PERF: Implements a binary heap data structure, also used in priority queues
// NOTE: "Heap sort" was coined in the "garbage-collected storage" languages
// However, here it refers to the data structure and not the storage class
//

// Its almost a complete binary tree, but lacks the LOWEST NODE, which is
// filled left up to a point (usually the HEAD)
//
// Its implemented using an array property called arr.heapSize that represents
// how many elements are stored within the array.
//
// INFO: arr[i:n];
// INFO: arr[0:arr.heapSize] => 0 <= arr.heapSize <= n;
// INFO: if (arr.heapSize === 0) => HEAD IS EMPTY

// The reason for using heapSize as a separate attribute is that during the
// execution of heap operations (such as building a heap or extracting the
// maximum element), the number of elements considered as part of the heap
// may be less than the total length of the array.

// What sets it apart and proofs that its binary is how the indices are compu-
// ted. Since it relies on a hierarchical schema, referring to one node to
// another is ONLY ONE INSTRUCTION => Shifting the binary representation to
// the left, right or itself... let's see it more clearly

// INFO: Parent(i) return [i/2] // one instruction: shifts i right ONE bit position
// INFO: Left(i) return 2i // one instruction: shifts the binary representation by one bit position
// INFO: Right(i) return 2i + 1 // one instruction: shifts the binary representation one bit and adding 1

// Two kinds of heaps =>

// INFO: max-heaps => arr[Parent(i)] >= arr[i] // heapsort algorithm
// INFO: min-heaps => arr[Parent(i)] <= arr[i] // priority queues

// Since they are trees, we can define the height of a node in a tree to be
// the number of edges on the longest simple downward pasth from node to leaf
// This height of the heap its also the height of its root

// These are the procedures that make both the algorithm and the data structure

// NOTE: max_heapify => runs O(log n), maintains the maxHeap property
// NOTE: build_max_heap => runs in linear time, returns maxHeap from unordered arr
// NOTE: heap_sort => runs O(n log n), sorts the array IN PLACE
// INFO: max_heap_insert =>
// max_heap_extract_max =>
// max_heap_increase_key =>
// max_heap-increase-key =>
// max_heap_maximum => run in O(log n) + time mapping objects and insertion
// into the priority queue and indices in the heap

// WARN: MAX_HEAPIFY
// Relies on the arr.heapSize atribute and an index [i] to an array
// Asumes that Left(i) and Right(i) are max-heaps and checks if > arr[i]
// If it is greater, makes arr[i] "float down"

// Since like we saw before, its necessary to implement a heapSize to keep track
// of the elements while comparing that may differ to the total number of elements
// in the array both a class and types can be used. The class allows makes
// possible the implementaiton of more functions that may be useful in the heap,
// but since the book its an overview of the most common algorithms, I'll stick
// to a type unless I the conditions require a more formal OOP approach. This
// can be seen in the following file

/*
class Heap {
  arr: number[];
  heapSize: number;

  constructor(
    arr: number[],
  ) {
    this.arr = arr;
    this.heapSize = arr.length;
  }
}
*/

type Heap = {
  heapSize: number;
  [index: number]: number;
};

const leftNode = (i: number): number => {
  return 2 * i;
};
const rightNode = (i: number): number => {
  return 2 * i + 1;
};
const parentNode = (i: number): number => {
  return Math.floor(i / 2);
};

// This procedure in the algorithm looks for a node and compares it to the
// elements to its left and right, pushing down the tree the smallest value.
// I've tried to understand this the following way

// i => This is ME[i], hi! i 'm the index currently, tho' I gotta know the
// neighbourhood a little.
const max_heapify = (arr: Heap, i: number) => {
  let largest: number;
 
  const l: number = leftNode(i); // What is the index of my left?
  const r: number = rightNode(i); // What is the index of my right?

  // Is the index of the element on my left <= the current length?
  // If it is, is it greater than ME?
  if (l <= arr.heapSize && arr[l] > arr[i]) {
    largest = l;
  } else {
    largest = i;
  }

  if (r <= arr.heapSize && arr[r] > arr[largest]) {
    largest = r;
  }

  // Now I gotta be "exchanged" or swapped, there are various ways in which
  // I can be exchanged, although
  if (largest !== i) {
    const temp = arr[i];

    // This is the element I'll be moving
    console.log(temp);

    // Exchange
    arr[i] = arr[largest];
    arr[largest] = temp;

    // Just to check out the movement!
    console.log(arr);

    // See ya' until I'm in place, mate!
    max_heapify(arr, largest);
  }
};

// HACK: After fighting for a while trying to use types and not classes
// this is the way I tried to make my function accept my array
const createHeap = (arr: number[]): Heap => {
  const heap: Heap = {
    heapSize: arr.length,
  };

  for (let i = 0; i < arr.length; i++) {
    heap[i + 1] = arr[i];
  }

  return heap;
};

// NOTE: Exercise 6.2-1
const arr = [27, 17, 3, 16, 13, 10, 1, 5, 7, 12, 4, 8, 9, 0];

const heapArr = createHeap(arr);

console.log(heapArr);
max_heapify(heapArr, 3);
console.log(heapArr);
