const unsortedArray = (arrLengthMax: number): number[] => {
  const arr = [];

  for (let i = 0; i < arrLengthMax; i++) {
    arr.push(Math.floor(Math.random() * arrLengthMax));
  }

  return arr;
}

export default unsortedArray;

// NOTE: This is the ES6 way of doing it but the compiler errors on .from method

//const unsortedArray: number[] = Array.from({ length: 10000 }, () =>
//  Math.floor(Math.random() * 10000)
//);
