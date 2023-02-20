// Assignment code here
var numericCharacters = ['1','2', '3', '4', '5', '6', '7', '8', '9'];
  var uppercasedCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  var lowercasedCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var specialCharacters = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];
  var chosenCharacters = [];
 
  function generatePassword() {
  
  //get desired password length
  passwordLength = prompt("How many characters do you want in your password? Choose between 8-128 characters.");
  if (passwordLength < 10 || passwordLength > 64 ) {
    return ("Your input was not valid. \nYour number needs to be between 10 and 64. \nPlease try again.");
  } 
  else if (isNaN(passwordLength)) {
    return ("You didn't enter a number. \nPlease try again, enter a NUMBER between 10 and 64.");
  }
  else  {
    alert("Your password will be " + passwordLength + " characters long.");
    
  }

  wantNumbers = confirm("Do you want your password to have numbers?");
  wantLowercase = confirm("Do you want lowercase characters?");
  wantUppercase = confirm("Do you want uppercase characters?");
  wantSpecial = confirm("Do you want special characters?");
  if (wantNumbers === false && wantLowercase === false && wantUppercase === false &&  wantSpecial === false) {
    return "Please try again, you need to select at least one character type to use in your password.";
  };

  // put the chosen character sets into chosenCharacters
  if (wantNumbers) {
    chosenCharacters = chosenCharacters.concat(numericCharacters);
  }
  if (wantLowercase) {
    chosenCharacters = chosenCharacters.concat(lowercasedCharacters);
  }
  if (wantUppercase) {
    chosenCharacters = chosenCharacters.concat(uppercasedCharacters);
  }
  if (wantSpecial) {
    chosenCharacters = chosenCharacters.concat(specialCharacters);
  }

  // generate the random password characters from the chosenCharacters
  let newPassword = ""
  for (let i = 0; i < passwordLength; i++) {
    let rng =[Math.floor(Math.random() * chosenCharacters.length)];
    // or finalPassword += chosenCharacters[rng];
    newPassword = newPassword + chosenCharacters[rng];
  }
  return ("Here's your password, keep it safe and don't forget it!\n\n" + newPassword);
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);