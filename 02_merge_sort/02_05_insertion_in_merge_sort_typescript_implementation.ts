import unsortedArray from "../unsorted_array";

const insertionSort = (arr: number[]): number[] => {
  for (let i = 1; i < arr.length; i++) {
    const key = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = key;
  }

  return arr;
};

const merge = (l: number[], r: number[]): number[] => {
  let arr: number[] = [];
  let i = 0,
    j = 0;

  while (i < l.length && j < r.length) {
    if (l[i] <= r[j]) {
      arr.push(l[i]);
      i++;
    } else {
      arr.push(r[j]);
      j++;
    }
  }

  return [...arr, ...l.slice(), ...r.slice()];
};

const merge_sort = (arr: number[]): number[] => {
  if (arr.length <= 50) return insertionSort(arr);

  const mid = Math.floor(arr.length / 2);
  const l = arr.slice(0, mid);
  const r = arr.slice(mid);

  return merge(merge_sort(l), merge_sort(r));
}

const uns_arr = unsortedArray(100000);

console.log(merge_sort(uns_arr));
