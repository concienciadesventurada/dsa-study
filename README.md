## Introduction to algorithms and Data Structures

An in depth reading of the book written by Cormen, Leiserson, Rivest and Stein.

My main goal is to read it front-to-back, completing the exercises and getting a
good grasp on DSAs.

All implementations will be written mainly in TypeScript, however, I may use other
languages if they are more appropriate or easier to get what they are __actually__
doing: for example, write a Linked List in C since given the conditions of the
language they are so trivial and bare-bones.

## Instructions of use

Instructions is a big word, so the recommended way to navigate and make sense of this project is the following:

Just run `yarn watch` to compile the TypeScript code to executable JavaScript and then
`node desired_algorithm.js` to see the results.

However, since this is more like a notebook than and cheatsheet for DSAs it "works" this way:

### If you have no prior knowledge of DSAs

Well, I hope this is a good start for you. I follow the structure of the book and resolve the
problems. Each algorithm's folder has numbered files relatively paired with the notation of the book.

- The first file is a direct translation from the pseudocode to TypeScript fully commentated in my heterodox way.
- The second file is usually the direct translation too, but now lightly commented or keeping only
the comments that the authors themselves left in the snippets
- The third file is a commentated implementation that is more appropriate or semantic
with TypeScript, also lightly commentated.
- The fourth file is the proper implementation in TypeScript that you may find
in the wild or are usually settled as.

### If you do know DSAs

What can I say then, be my guest, maybe you'll find something useful in my non-conventional way of learning.
And if you find any inaccuracies or errors, feel free to open an issue or PR to merge it to help any traveler that
gets to this repo.

## Resources used

I plan to add the videos, chapters and web pages I query whenever I'm learning any
of these topics and link them, so it would work as a guide for myself and other people
who learn in a rather heterodox manner.

- [**Big O**](https://big-o.io/): A great general overview in different languages
the computing complexity of some of the most known sorting algorithms

### Insertion sort

The first algorithm tackled by the book:

- [**Ordenamiento por Inserción | Insertion sort by Chio Code**](https://www.youtube.com/watch?v=6GU6AGEWYJY)
- [**Insertion Sort in Big-O.io**](https://big-o.io/algorithms/comparison/insertion-sort/)

### Merge sort

The second algorithm presented by the book to illustrate different use cases and
also to later demonstrate how one can be used an be complemented by the other.
This one, far more complex in comparison due to its recursive foundation was a
lot harder to grasp, however, eventually makes... kinda sense? I swear it's not THAT hard

- [**Merge Sort | Ordenamiento por mezcla**](https://www.youtube.com/watch?v=ACFZn_xQcz8)
- [**Recursividad | FÁCIL de entender y visualizar | Recursión**](https://www.youtube.com/watch?v=YwRjEOFxvO0)
- [**Javascript Freecodecamp Algorithm #34: Implement Merge Sort**](https://www.youtube.com/watch?v=x_Z9FcAPmbk)
- [**Insertion Sort in Big-O.io**](https://big-o.io/algorithms/comparison/merge-sort/)
