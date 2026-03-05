let friendsss = [
  "Ahmed",
  "Sayed",
  "Eman",
  "Mahmoud",
  "Ameer",
  "Osama",
  "Sameh",
];
let letter = "a";

// Output

let j = letter.length;
let counter = j;

for (i = +false; i < friendsss.length; i += j) {
  if (friendsss[i].startsWith(letter.toUpperCase())) {
    continue;
  }
  console.log(`"${counter} => ${friendsss[i]}"`);
  counter += j;
}
