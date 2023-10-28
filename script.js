var passwordLength = 8;
var selection = [];

//add an array of characters to choose for password
var upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var lower = 'abcdefghijklmnopqrstuvwxyz';
var number = '0123456789';
var specialCharacter = '!@#$%^&*()?><:"{[=-';


//add event listener to generate button
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);

// function to write password 
function writePassword() {
  var isValid = getPrompts();
  var passwordText = document.querySelector("#password");

  //generates a new password and displays it in the passwordText element if the password length is valid. Otherwise, it displays an error message.
if (isValid) {
    var newPassword = generatePassword();
    passwordText.value = newPassword;
  } else {
    passwordText.value = "Please enter a password length between 8 and 128 characters!";
  }
}
/*generate an array of random characters and concatenate the characters into a string*/
function generatePassword() {
  var password = Array.from({ length: passwordLength }, () => {
    var randomIndex = Math.floor(Math.random() * selection.length);
    return selection[randomIndex];
  }).join('');

  return password;
}



// Create prompt to ask user the password length - 1function getprompts(){
function getPrompts() {
  selection = [];
  passwordLength = parseInt(prompt("Password length?"));

  /* To create a new array with only the set of characters for which the user said YES in the above step
   upper = ['A','B', 'C'] , specialcharacter = ['@','%', '$'], NewArray = ['A','B', 'C','@','%', '$']
   Write a logic to create a password by selecting random characters out of NewArray for the password length that user mentioned in the first prompt
  */
  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert("Password must be between 8 and 128 characters. Please try again.");
    return false;
  }

  if (confirm("Include uppercase letters?")) {
    selection += upper;
  }

  if (confirm("Include lowercase letters?")) {
    selection += lower;
  }

  if (confirm("Include special characters?")) {
    selection += specialCharacter;
  }

  if (confirm("Include numbers?")) {
    selection += number;
  }

  return true;
}
