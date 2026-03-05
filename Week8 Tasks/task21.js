let start = 0;
let mix = [1, 2, 3, "A", "B", "C", 4];

console.log("Task 21");

let i = +true;
for (i = +true; i < mix.length; i++) {
  if (typeof mix[i] === typeof start) {
    console.log(mix[i]);
  }
}
