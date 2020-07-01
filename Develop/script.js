// Assignment Code
var generateBtn = document.querySelector("#generate"); 



var max_count = 5;
function showNumconfirm() {
  var numbersinpwd = (prompt("Do you want numbers in your password? Yes or No", ""));
  if (numbersinpwd.toLowerCase() === "yes" || numbersinpwd === "no") {
    alert("You chose " + numbersinpwd.toLowerCase() + ' to adding numbers to your password.');
  } else {
    alert("You did not type Yes or No. Please try again");
    // to limit user for limited count
    if (--max_count > 0)
      showNumconfirm()
  }
}
showNumconfirm();
function showSymbconfirm() {
  var symbinpwd = (prompt("Do you want special characters in your password? Yes or No", ""));
  if (symbinpwd.toLowerCase() === "yes" || symbinpwd === "no") {
    alert("You chose " + symbinpwd.toLowerCase() + ' to adding special characters to your password.');
  } else {
    alert("You did not type Yes or No. Please try again");
    // to limit user for limited count
    if (--max_count > 0)
      showSymbconfirm()
  }
}
showSymbconfirm();
function uppercaseconfirm() {
  var upperOrLowerinPwd = (prompt("Do you want only upper case or only lowercase in your password? Uppercase or Lowercase", ""));
  if (upperOrLowerinPwd.toLowerCase() === "uppercase" || upperOrLowerinPwd === "lowercase") {
    alert("You chose " + upperOrLowerinPwd.toLowerCase() + ' letters for your password.');
  } else {
    alert("You did not type Uppercase or Lowercase. Please try again");
    // to limit user for limited count
    if (--max_count > 0)
      uppercaseconfirm()
  }
}
uppercaseconfirm();
function pwdLengthconfirm() {
  var pwdLengthnum = (prompt("Please tell me how long you want your password to be. It can be 8 to 128 characters long", ""));
  if (pwdLengthnum <= 128 && pwdLengthnum >= 8) {
    alert("Your password length " + pwdLengthnum + " matches the requirements.");
  } else {
    alert("The number you input " + pwdLengthnum + " is not between 8 and 128");
    // to limit user for limited count
    if (--max_count > 0)
      pwdLengthconfirm()
  }
}
  pwdLengthconfirm();








  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

  }

  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);
