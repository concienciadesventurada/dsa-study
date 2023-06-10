import unsortedArray from "../unsorted_array";

const arr = unsortedArray(10000);

const merge = (l: number[], r: number[]): number[] => {
  let arr: number[] = [];
  let i = 0, j = 0;

  while (i < l.length && j < r.length) {
    if (arr[i] <= arr[j]) {
      arr.push(arr[i]);
      i++;
    } else {
      arr.push(arr[j]);
      j++;
    }
  }

  return [...arr, ...l.slice(i), ...r.slice(j)];
}

const mergeSort = (arr: number[]): number[] => {
  if (arr.length <= 1) return arr;

  let mid = Math.floor(arr.length / 2);
  let l = arr.slice(0, mid);
  let r = arr.slice(mid);

  return merge(mergeSort(l), mergeSort(r));
}

console.log(mergeSort(arr));
