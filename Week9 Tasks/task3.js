function ageInTime(theAge) {
  if (theAge > 10 && theAge < 100) {
    console.log(`Your age is ${theAge} Years
        , ${theAge * 12} Months
        , ${theAge * 52.177} Weeks
        , ${theAge * 8760} Hours
        , ${theAge * 525600} Minutes
        and ${theAge * 31536000} Seconds. `);
  } else {
    console.log("Your age is out of range");
  }
}

// Needed Output
ageInTime(110); // Age Out Of Range
ageInTime(38); // Months Example => 456 Months
