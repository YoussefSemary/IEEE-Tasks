function getDetails(zName, zAge, zCountry) {
  function namePattern(zName) {
    let nameArray = zName.split(" ");
    return `${nameArray[0]} ${nameArray[1][0].toUpperCase()}.`;
  }

  function ageWithMessage(zAge) {
    let age = parseInt(zAge);
    return `Your Age Is ${age}`;
  }

  function countryTwoLetters(zCountry) {
    let countryCode = zCountry.substring(0, 2).toUpperCase();
    return `You Live In ${countryCode}`;
  }

  function fullDetails() {
    return `Hello ${namePattern(zName)}, ${ageWithMessage(zAge)}, ${countryTwoLetters(zCountry)}`;
  }

  return fullDetails();
}

console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));

console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
