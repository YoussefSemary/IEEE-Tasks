let day = prompt("Enter one day of the week").trim();
let result = day[0].toUpperCase() + day.slice(1);
console.log(result);

switch (result) {
  case "Friday":
  case "Saturday":
  case "Sunday":
    console.log("No appointments available");
    break;

  case "Monday":
  case "Thursday":
    console.log("From 10:00 Am to 5:00 PM");
    break;

  case "Tuesday":
    console.log("From 10:00 AM to 6:00 PM");
    break;
  case "Wednesday":
    console.log("From 10:0 AM to 7:00 PM");
    break;
  default:
    console.log("May you enter a valid day?");
}
