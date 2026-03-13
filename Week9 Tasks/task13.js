let myArray = ["E", "l", "z", ["e", "r"], "o"];

let flattenedArray = myArray
  .reduce(function (acc, current) {
    return acc + current;
  })
  .replace(",", "");
console.log(flattenedArray);

// Elzero
