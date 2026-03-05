let start = 10;
let end = 100;
let execlude = 40;

console.log("Task15");

for (let i = start; i <= end; i += start) {
  if (i === execlude) {
    continue;
  }

  console.log(i);
}
