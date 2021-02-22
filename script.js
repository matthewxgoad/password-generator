// Assignment Code
var generateBtn = document.querySelector("#generate");

// Create a series of prompts asking the user the parameters of their new password.
// This function asks and sets the password length.
function howLong(){
    passwordLength = prompt("How long would you like your password to be? (between 8-128 characters)");
        if( isNaN(passwordLength)){
            alert("Come on, dude. That's not a number.");
         howLong();
        }else if( passwordLength < 8 ){
            alert("That's too short, dummy. Password must be between 8-128 characters.");
         howLong();
        }else if( passwordLength > 128 ){
            alert("That's too dang long. Password must be between 8-128 characters.");
         howLong();
        }
        return passwordLength;
    }   
// This function prompts user to use or not use UPPERCASE characters.
function useUppercase(){
    uppercaseConfirm = confirm("Use UPPERCASE characters? OK to confirm or Cancel for No.");
    return uppercaseConfirm;
}
// This function prompts user to use or not use numbers.
function useNumbers(){
    numbersConfirm = confirm("Use number characters? OK to confirm or Cancel for No.");
    return numbersConfirm;
}
// This function prompts user to use or not use special characters.
function useSpecialCharacters(){
    specialConfirm = confirm("Use special characters? OK to confirm or Cancel for No.");
    return specialConfirm;
}
// Create a function to combine the input of previous prompts and generate random characters into the var password
function generatePassword() {
    howLong();
    useUppercase();
    useNumbers();
    useSpecialCharacters();
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numerals = '0123456789';
    const specialCharacters = '!@#$%^&*()~-=_+.{}';
    
    var characters = lowercase;
    var password = "";

    if (uppercaseConfirm && numbersConfirm && specialConfirm){
        characters += uppercase + numerals + specialCharacters;
      
      }else if (uppercaseConfirm && numbersConfirm){
        characters += uppercase + numerals;
      
      }else if (numbersConfirm && specialConfirm){
        characters += numerals + specialCharacters;
      
      }else if (uppercaseConfirm && specialConfirm){
        characters += uppercase + specialCharacters;
      
      }else if (uppercaseConfirm){
        characters += uppercase;
      
      }else if(numbersConfirm){
        characters += numerals;
      
      }else if (specialConfirm){
        characters += specialCharacters;
      }
      function getRandomInt(maxBound) {
        return Math.floor(Math.random()*maxBound)
      }
      for (let i = 0; i < passwordLength; i++) {
        var randomIndex = getRandomInt(parseInt(characters.length))
        password += characters[randomIndex]
      }
      return password;
}

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
  
  }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Copy to Clipboard function
function copy() {
    var copyText = document.querySelector("#password");
    copyText.select();
    document.execCommand("copy");
  }
  
  document.querySelector("#clipboardCopy").addEventListener("click", copy);
