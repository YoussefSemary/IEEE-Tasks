let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

allArrs = arr1.concat(arr2);
allArrs.sort();
// Your Code Here

console.log(allArrs.slice(arr2.length).join("").toLowerCase()); // fxy
