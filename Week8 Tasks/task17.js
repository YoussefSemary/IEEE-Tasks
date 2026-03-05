let first = 1;
let last = 6;
let breaker = 2;

console.log("Task 17");

for (i = first; i <= last; i++) {
  console.log(i);
  for (j = breaker; j <= breaker ** breaker; j += 2) {
    console.log(`--${j}`);
  }
}
