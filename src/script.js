// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p',
  'q','r','s','t','u','v','w','x','y','z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P',
  'Q','R','S','T','U','V','W','X','Y','Z'
];

// Array of special characters to be included in password
var specialCharacters = [
  '@','%','+','\\','/',"'",'!','#','$','^','?',':',',',')','(','}',
  '{',']','[','~','-','_','.'
];

//Array for the combination of characters selected for use
var chosenCaracterSet = [];

// Function to prompt user for password options
//function getPasswordOptions() {
//}

// Function for getting a random element from an array of chosen characters
//function getRandom(arr) {

//}

// Function to generate password with user input
function generatePassword() {
//prompt for password length and alert
passwordLength = prompt ("Choose a number between 10 and 64 for your password length");
  if (passwordLength < 10 || passwordLength > 64 || isNaN(passwordLength)) {
  return "Your response was not valid. Please start again and enter a NUMBER that's between 10 and 64.";
  }
  else if (passwordLength >= 10 && passwordLength <=64){
  alert ("Your password will have " + passwordLength + " characters.");
  }
  //confirming which caharacter sets to include
  wantLowercase = confirm("Do you want lowercase characters?");
  wantUppercase = confirm("Do you want uppercase characters?")
  wantNumbers = confirm("Do you want to use numbers?")
  wantSpecialChar = confirm("Do you want special characters?");

  if (wantLowercase === false && wantUppercase === false && wantNumbers === false && wantSpecialChar === false) {
    return "You'll need to try again and this time select at least one character type to be used in your password.";
  };
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);