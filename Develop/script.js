// Assignment Code
var generateBtn = document.querySelector("#generate");

const key_strings = {
  lowercase: 'abcdefghijklmnopqrstuvwxyz',
  uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  number: '0123456789',
  symbol: "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~",
};

function generatePassword2() {
  var passwordCharSet = "";

  var max_count = 5;

  function showNumconfirm() {
    var numbersinpwd = (prompt("Do you want numbers in your password? Yes or No", ""));
    var answer = numbersinpwd.toLowerCase();
    if (answer === "yes" || answer === "no") {
      passwordCharSet += key_strings.number
    } else {
      alert("You did not type Yes or No. Please try again");
      // to limit user for limited count
      if (--max_count > 0)
        showNumconfirm()
    }
  }
  showNumconfirm();

  function showsymbconfirm() {
    var symbinpwd = (prompt("Do you want special characters in your password? Yes or No", ""));
    var answer = symbinpwd.toLowerCase();
    if (answer === "yes" || answer === "no") {
      passwordCharSet += key_strings.symbol;
    } else {
      alert("You did not type Yes or No. Please try again");
      // to limit user for limited count
      if (--max_count > 0)
        showsymbconfirm()
    }
  }
  showsymbconfirm();

  function uppercaseconfirm() {
    var uppercaseinpwd = (prompt("Do you want uppercase letters in your password? Yes or No", ""));
    var answer = uppercaseinpwd.toLowerCase();
    if (answer === "yes" || answer === "no") {
      passwordCharSet += key_strings.uppercase;
    } else {
      alert("You did not type Upper or Lower. Please try again");
      // to limit user for limited count
      if (--max_count > 0)
        uppercaseconfirm()
    }
  }
  uppercaseconfirm();

  function lowercaseconfirm() {
    var uppercaseinpwd = (prompt("Do you want lowercase letters in your password? Yes or No", ""));
    var answer = uppercaseinpwd.toLowerCase();
    if (answer === "yes" || answer === "no") {
      passwordCharSet += key_strings.lowercase;
    } else {
      alert("You did not type Upper or Lower. Please try again");
      // to limit user for limited count
      if (--max_count > 0)
        lowercaseconfirm()
    }
  }
 

  var length = window.prompt("Enter a number from 8 to 128 for password length.");


  var password = "";
  for (let i = 0; i < length; i++) {
    password += passwordCharSet[Math.floor(Math.random() * passwordCharSet.length)]
  }
  return password;
}

console.log(generatePassword2());



// Write password to the #password input
function writePassword() {
  var password = generatePassword2();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

