// Assignment Code
var generateBtn = document.querySelector("#generate");


//Pulls in all the possible character posibilities and defaults. 
let length = 8;
const key_strings = {
  lowercase: 'abcdefghijklmnopqrstuvwxyz',
  uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  number: '0123456789',
  symbol: "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~",
};

function generatePassword2() {
  var passwordCharSet = "";

//Validates how long the user wants their password to be
  var max_count = 5;
  function lengthconfirm() {
    var answer = (prompt("Please tell me how long you want your password to be. It can be 8 to 128 characters long", ""));
    if (answer <= 128 && answer >= 8) {
      length = (answer <= 128 && answer >= 8) ? answer : false
    } else {
      alert("The number you input " + answer + " is not between 8 and 128");
      // to limit user for limited count
      if (--max_count > 0)
        lengthconfirm()
    }
  }
  lengthconfirm();

  //Validates if the user wanted numbers in their password 
  function showNumconfirm() {
    var numbersinpwd = (prompt("Do you want numbers in your password? Yes or No", ""));
    var answer = numbersinpwd.toLowerCase();
    if (answer === "yes" || answer === "no") {
      (answer === "yes") ? passwordCharSet += key_strings.number : false

    } else {
      alert("You did not type Yes or No. Please try again");
      // to limit user for limited count
      if (--max_count > 0)
        showNumconfirm()
    }
  }
  showNumconfirm();

  //Validates if the user wanted special characters in their password 
  function showsymbconfirm() {
    var symbinpwd = (prompt("Do you want special characters in your password? Yes or No", ""));
    var answer = symbinpwd.toLowerCase();
    if (answer === "yes" || answer === "no") {
      (answer === "yes") ? passwordCharSet += key_strings.symbol : false;
    } else {
      alert("You did not type Yes or No. Please try again");
      // to limit user for limited count
      if (--max_count > 0)
        showsymbconfirm()
    }
  }
  showsymbconfirm();

  //Validates if the user wanted uppercase letters in their password 
  function uppercaseconfirm() {
    var uppercaseinpwd = (prompt("Do you want uppercase letters in your password? Yes or No", ""));
    var answer = uppercaseinpwd.toLowerCase();
    if (answer === "yes" || answer === "no") {
      (answer === "yes") ? passwordCharSet += key_strings.uppercase : false;
    } else {
      alert("You did not type Yes or No. Please try again");
      // to limit user for limited count
      if (--max_count > 0)
        uppercaseconfirm()
    }
  }
  uppercaseconfirm();

  //Validates if the user wanted lowercase letters in their password 
  function lowercaseconfirm() {
    var lowercaseinpwd = (prompt("Do you want lowercase letters in your password? Yes or No", ""));
    var answer = lowercaseinpwd.toLowerCase();
    if (answer === "yes" || answer === "no") {
      (answer === "yes") ? passwordCharSet += key_strings.lowercase : false;
    } else {
      alert("You did not type Yes or No. Please try again");
      // to limit user for limited count
      if (--max_count > 0)
        lowercaseconfirm()
    }
  }
  lowercaseconfirm();

  console.log(passwordCharSet);

//Validate if the user did not select any options, so a default can be applied for the selected length. 
  function passwordcheck() {
    if (passwordCharSet === "" || passwordCharSet === undefined || passwordCharSet === null) {
      (passwordCharSet === "" || passwordCharSet === undefined || passwordCharSet === null) ? passwordCharSet += key_strings.lowercase : false;
      alert("You did not select anything. Applying default password");
    } else {
    }
  }
  passwordcheck();

  //Writes the password with the specified selections and length
  var password = "";
  for (let i = 0; i < length; i++) {
        password += passwordCharSet[Math.floor(Math.random() * passwordCharSet.length)]
  }
  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword2();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);