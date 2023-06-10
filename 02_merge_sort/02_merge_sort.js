"use strict";
// Merge sort follows a divide-and-conquer method. Where the algorithms calls
// itself (recursion) one or more times and divides its input in smaller sub-
// problems until they are the most minimal structure, solves it and then re-
// assembles the input into its sorted state as a solution
Object.defineProperty(exports, "__esModule", { value: true });
// The recursion "bottoms out" it reaches the base case when the subarray
// Arr[p:r] to be sorted has just 1 element, that is, when p equals r.
// This is because the merge sort uses indeces the following way: p <= q <=r
// It uses two arrays: A[p:q] && A[q+1:r] => merging into A[p:r]
var unsorted_array_1 = require("../unsorted_array");
// This is the base of the recursivity that merge sort is built upon
var merge = function (Arr, p, q, r) {
    // These two arrays => A[p:q] and A[q+1:r]
    // Are copied into two temporary arrays Left and Right
    // Then L && R are merged into A[p:r]
    var nL = q - p + 1; // number of elements or length of A[p:q]
    var nR = r - q; // number of elements or length of A[q+1:r]
    // These arrays are basically
    var L = new Array(nL); // A[p:q]
    var R = new Array(nR); // A[q+1:r]
    // NOTE: *
    // Fill the new arrays
    for (var i_1 = 0; i_1 < nL; i_1++) {
        // Copy Arr[p:q] into L[0: nL - 1]
        L[i_1] = Arr[p + i_1];
    }
    for (var j_1 = 0; j_1 < nR; j_1++) {
        // Copy Arr[q+1:r] into R[0: nL - 1]
        R[j_1] = Arr[q + j_1 + 1];
    }
    // NOTE: **
    // *, **: Note that the comments and pseudocode from the book substract
    // 1 from the actual length, this is not used in TS due to the following
    // iterators being not inclusive
    // Indexes of all smallest remaining items on each auxiliary array
    var i = 0; // L[i]
    var j = 0; // R[j]
    var k = p; // A[k] where k is the index of the location in A to fill
    // As long as each of the arrays L and R contains an unmerged element,
    // copy the smallest unmerged element back into A[p:r]
    while (i < nL && j < nR) {
        if (L[i] <= R[j]) {
            Arr[k] = L[i];
            i = i + 1;
        }
        else {
            Arr[k] = R[j];
            j = j + 1;
        }
        k = k + 1;
    }
    // Having gone through one of L and R entirely, copy the remainder of the
    // other to the end of A[p:r]
    while (i < nL) {
        Arr[k] = L[i];
        i = i + 1;
        k = k + 1;
    }
    while (j < nR) {
        Arr[k] = R[j];
        j = j + 1;
        k = k + 1;
    }
};
var unsortedArr = (0, unsorted_array_1.default)(20);
console.log("Unsorted array", unsortedArr);
var merge_sort = function (Arr, p, r) {
    if (p < r) {
        var q = Math.floor((p + r) / 2);
        merge_sort(Arr, p, q); // The function calls to itself
        merge_sort(Arr, q + 1, r);
        merge(Arr, p, q, r);
    }
};
merge_sort(unsortedArr, 0, unsortedArr.length - 1);
console.log("Merge sorted array", unsortedArr);
// TODO: Exercises to think about as per GC's suggestions on Discord
// 1.- Print the actual L and R arrays to see the division
// 2.- Refactor properly to TS
// 3.- Think in useful and descriptive names to p, q and r
