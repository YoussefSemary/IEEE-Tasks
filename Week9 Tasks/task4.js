function checkStatus(a, b, c) {
  let name, age, status;
  let qualities = [a, b, c];

  for (let i = 0; i < qualities.length; i++) {
    if (typeof qualities[i] === "string") {
      name = qualities[i];
    } else if (typeof qualities[i] === "number") {
      age = qualities[i];
    } else if (typeof qualities[i] === "boolean") {
      status = qualities[i];
    }
  }

  if (status === true) {
    console.log(
      `Hello${name}, your age is ${age} and You are available for Hire`,
    );
  } else {
    console.log(
      `Hello${name}, your age is ${age} and You are not available for Hire`,
    );
  }
}

// Needed Output
checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"
