// Apparently... according to Stack Overflow the semantic way would be

const build_max_heap = (arr: number[], n: number) => {
  arr.length = n; // arr.heapSize, really

  for (let i = n / 2; i > 0; i--) {
    heapify(arr, i);
  }
}

const heapify = (arr: number[], i: number) => {
  let largest: number;
  const l = i * + 2 // leftNode
  const r = l + 1; // rightNode

  if (l < arr.length && arr[l] > arr[i]) {
    largest = l;
  } else {
    largest = i;
  }

  if (r < arr.length && arr[r] > arr[largest]) {
    largest = r;
  }

  if (largest !== i) {
    const temp = arr[i];
    arr[i] = arr[largest];
    arr[largest] = temp;

    heapify(arr, largest);
  }
}

// TODO: Implement heapSort function
