let num1 = 10;
let num2 = 30;
let num3 = "30";

if (num3 > num1 && typeof num3 != typeof num1) {
  console.log(`You got it`);
} else if (num3 > num1 && num3 == num2 && typeof num3 != typeof num2) {
  console.log("Another one right");
} else if (num3 != num1 && typeof num3 != typeof num1 && typeof num3 != num2) {
  console.log("You got this one right");
}
