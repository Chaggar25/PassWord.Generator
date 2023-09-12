// Assignment code here
var numericCharacters = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

var uppercaseCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var lowercaseCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var specialCharacters = ["@", "%", "+", "\\", "/", "'", "!", "#", "$", "^", "?", ":", ",", ")", "(", "}", "{", "]", "[", "~", "-", "_", "."];

// Get references to the HTML elements
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");

// Function to prompt the user for the number of characters
function getPasswordLength() {
    var passwordLength = parseInt(prompt("How many characters do you want in your password?"));
    
    if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
        alert("Please choose a valid number of characters between 8 and 128.");
        return getPasswordLength(); // Recursively ask for input until it's valid
    }
    
    return passwordLength;
}

// Function to generate a password and we are added if statements to decides if the user would like to include lowercase, uppercase, numberic and special characters.
function generatePassword() {
    var passwordLength = getPasswordLength();
    var otherCharacters = [];

    if (confirm("Do you want to include lowercase characters?")) {
        otherCharacters = otherCharacters.concat(lowercaseCharacters);
    }

    if (confirm("Do you want to include uppercase characters?")) {
        otherCharacters = otherCharacters.concat(uppercaseCharacters);
    }

    if (confirm("Do you want to include numeric characters?")) {
        otherCharacters = otherCharacters.concat(numericCharacters);
    }

    if (confirm("Do you want to include special characters?")) {
        otherCharacters = otherCharacters.concat(specialCharacters);
    }

    if (otherCharacters.length === 0) {
        alert("You must select at least one character type.");
        return generatePassword(); 
    // This code will make sure the user selects one of the accepted characters listen at the beginning of the code.
    }


    // this for loop is going to result the code based on the criteria the user selected above.
    var password = "";
    for (var i = 0; i < passwordLength; i++) {
        var randomIndex = Math.floor(Math.random() * otherCharacters.length);
        password += otherCharacters[randomIndex];
    }

    return password;
}

// Function to display the generated password
function writePassword() {
    var password = generatePassword();
    passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
