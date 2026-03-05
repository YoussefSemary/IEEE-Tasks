let friends = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
let index = 0;
let counter = 0;
let letter = "a";

i = +true;

while (i < friends.length) {
  if (
    typeof friends[i] === "number" ||
    friends[i].startsWith(letter.toUpperCase())
  ) {
    i++;
    continue;
  }
  counter++;

  console.log(`${counter} => ${friends[i]}`);
  i++;
}
