// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  // const lowercase = [...'abcdefghijklmnopqrstuvwxyz'];
  // const uppercase = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'];
  // const numerals = [...'0123456789'];
  // const specialCharacters = [...'!@#$%^&*()~-=_+,.{}'];
  prompt("How many characters should your password contain?");
}
/* 
Required:
uppercase, lowercase, numeric, and/or special characters
At least 8 characters; no more than 128 characters
Series of prompts:
true or false, do you want to include lowercase? if so add lowercase characters

a variable like allCharactersPossible to store all possible characters
and then pull those characters randomly


var dog = ["d", "o", "g"]
var cat = ["c", "a", "t"]

var allAnimalCharacters = ???

random selection for n number of characters the user wants
validation to meet assignement criteria, also NaN (not a number)
check NaN first


1 How many characters would you like your password to contain?
Password must between 8-128 chracters
Click OK to confirm including special chracters
Click ok to include … (cancel would exclude)
prints password meeting criteria

"To include special characters, click OK. To exclude special characters, click Cancel."

The HTML portion is just changing the text-content at the end. Also making the button work. 

*/



// This function gets a random integer between and including two values.
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); 
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
// look up event listener
// text area has a property called value, set it to the new password
generateBtn.addEventListener("click", writePassword);


/**
 * Required: 
 * lowercase, uppercase, numeric, and/or special characters
 * 
 * 8 <= passwordLength <= 128
//GIVEN a new password -- our application's purpose
//prompt, window.prompt
//we're asking the user what they want for their password
// also another series of prompts
//what length? we store that
//what characters ? we store that too
  var allCharactersPossible;
  var dog = ["d", "o", "g"]
  var cat = ["c", "a", "t"]
  var allAnimalCharacters = ? // how do we do this given variables cat and dog?
  2) random selection for n number of characters the user wanted
          1) NaN 
          2) Validation btw 8 -128
  if(lowerCase)
  {
    add lowercase to potential password characters
  }
  if(uppercase)
  {
    add uppercase to potential password characters
  }
*/

// function makeid(length) {
//   var result           = '';
//   var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//   var charactersLength = characters.length;
//   for ( var i = 0; i < length; i++ ) {
//      result += characters.charAt(Math.floor(Math.random() * charactersLength));
//   }
//   return result;
// }

// console.log(makeid(5));