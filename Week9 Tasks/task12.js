let myString = "EElllzzzzzzzeroo";

let filteredString = myString
  .split("")
  .filter(function (ele, index, array) {
    return array.indexOf(ele) === index;
  })
  .join("");

console.log(filteredString);

// Elzero
