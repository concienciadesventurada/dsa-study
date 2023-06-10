import unsortedArray from "../unsorted_array";

const merge = (Arr: number[], p: number, q: number, r: number) => {
  let nL = q - p + 1; // length of A[p:q]
  let nR = r - q; // length of A[q+1:r]

  // These arrays are basically
  let L = new Array(nL); // (n - 1) A[p:q]
  let R = new Array(nR); // (n - 1) A[q+1:r]

  // Fill the new arrays
  for (let i = 0; i < nL; i++) {
    // Copy Arr[p:q] into L[0: nL - 1]
    L[i] = Arr[p + i];
  }
  for (let j = 0; j < nR; j++) {
    // Copy Arr[q+1:r] into R[0: nL - 1]
    R[j] = Arr[q + j + 1];
  }

  // Indexes of all smallest remaining items on each auxiliary array
  let i = 0; // L[i]
  let j = 0; // R[j]
  let k = p; // A[k] where k is the index of the location in A to fill

  while (i < nL && j < nR) {
    if (L[i] <= R[j]) {
      Arr[k] = L[i];
      i++;
    } else {
      Arr[k] = R[j];
      j++;
    }
    k++;
  }

  // Append the remainder either from L or R
  while (i < nL) {
    Arr[k] = L[i];
    i++;
    k++;
  }
  while (j < nR) {
    Arr[k] = R[j];
    j++;
    k++;
  }
};

const unsortedArr = unsortedArray(20);

console.log("Unsorted array", unsortedArr);

const merge_sort = (Arr: number[], p: number, r: number) => {
  if (p < r) {
    let q = Math.floor((p + r) / 2);
    merge_sort(Arr, p, q); // The function calls to itself
    merge_sort(Arr, q + 1, r);
    merge(Arr, p, q, r);
  }
};

merge_sort(unsortedArr, 0, unsortedArr.length - 1);

console.log("Merge sorted array", unsortedArr);

// NOTE: **
// *, **: Note that the comments and pseudocode from the book substract
// 1 from the actual length, this is not used in TS due to the following
// iterators being not inclusive
