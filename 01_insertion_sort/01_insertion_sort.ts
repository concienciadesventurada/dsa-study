import unsortedArray from "../unsorted_array";

console.log("Unsorted Array", unsortedArray);

// The algorithm starts on the second element of the array: i = 1
for (let i = 1; i < unsortedArray.length; i++) {
  // I store in an auxiliary variable or key the second element
  let key = unsortedArray[i];
  // j will be the previous index of the current element to be sorted
  let j = i - 1;

  // This is the function that triggers the comparison operation down the line.
  // While previous element of the current key is greater than it...
  while (j >= 0 && unsortedArray[j] > key) {
    // My new key in my while loop = the element that is greater than my key
    // Basically we move all the unsorted elements to the right
    unsortedArray[j + 1] = unsortedArray[j];
    // Then substract 1 to the index and check again if this element is greater
    // Note that if j = 0, then j = -1 breaking the loop, we got to the start
    j = j - 1;
  }
  // Note that when we exit the while loop two things have happened:
  //    1. Either all the elements to the left of the key are smaller
  //    2. We reached the beginning of the array
  // Now we officially place now sorted algorithm in the array
  // Making the "left hand" of it loop invariant => A[0:i-1]
  unsortedArray[j + 1] = key;
}
// The loop adds 1 to i and continues with the unsorted subarray, A[i+1:n]

console.log("Sorted Array", unsortedArray);

// AVG TIME COMPLEXITY => O(n^2)
// WORST TIME COMPLEXITY => O(n^2)
// BEST CASE => O(n)

// Because we have two loops, one inside the other and each loop iterates
// through, potentially, every element of the array in regular steps, in this
// case, it does monotonically.
