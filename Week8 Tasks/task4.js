// let numberOne = 9;

// let numberOne = 20;

let numberOne = 110;

if (numberOne < 10) {
  console.log(`00${numberOne}`); //009
} else if (numberOne > 10 && numberOne < 100) {
  console.log(`0${numberOne}`); //020
} else if (numberOne >= 100) {
  console.log(numberOne); //110
}
