let start = 0;
let swappedName = "elZerO";
i = start;
let result = "";

for (; i < swappedName.length; i++) {
  if (swappedName[i] === swappedName[i].toUpperCase()) {
    result += swappedName[i].toLowerCase();
  } else {
    result += swappedName[i].toUpperCase();
  }
}

console.log(result);
