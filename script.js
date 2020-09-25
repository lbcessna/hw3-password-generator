/* STARTING OVER HERE */
var passwordEL = document.querySelector("#password");
var btnGenerateEL = document.querySelector("#generate");

var getRandomLower = function () {
  var lower = "abcdefghijklmnopqrstuvwxyz";
  return lower[(Math.floor(Math.random() * lower.length))];
}
var getRandomUpper = function () {
  var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return upper[(Math.floor(Math.random() * upper.length))];
}

function getRandomNumber() {
  var number = "1234567890";
  return number[(Math.floor(Math.random() * number.length))];
}

function getRandomSymbol() {
  var symbol = "!@#$%^&*()[]{}<>.";
  return symbol[(Math.floor(Math.random() * symbol.length))];
}

btnGenerateEL.addEventListener("click", function () {
  passwordEL.textContent = "";
  var pwdLength = prompt("How long of a password do you need?");

  if ((pwdLength >= 8) && (pwdLength <= 128)) {
    var password = "";
    var count = pwdLength;
    var wantLower = confirm("Do you want lowercase letters?");
    var wantUpper = confirm("Do you want uppercase letters?");
    var wantNumber = confirm("Do you want numbers?");
    var wantSymbol = confirm("Do you want to include symbols?");
    // console.log(wantLower, wantUpper, wantNumber, wantSymbol);//this returns true or false value on each

    for (var i = 0; i < count - 1; i++) {
      if (wantLower && password.length < pwdLength) {
        password += getRandomLower();
        if (wantUpper && password.length < pwdLength) {
          password += getRandomUpper();
          if (wantNumber && password.length < pwdLength) {
            password += getRandomNumber();
            if (wantSymbol && password.length < pwdLength) {
              password += getRandomSymbol();
            }
          }
        }
      }
    }

  }

  console.log(password);
  passwordEL.append(password);

});

//TODO: WHEN I click the button to generate a password THEN I am presented with a series of prompts for password criteria

//TODO: WHEN prompted for password criteria THEN I select which criteria to include in the password
//TODO: WHEN prompted for the length of the password THEN I choose a length of at least 8 characters and no more than 128 characters
//TODO: WHEN prompted for character types to include in the password THEN I choose lowercase, uppercase, numeric, and/or special characters
//TODO: WHEN I answer each prompt THEN my input should be validated and at least one character type should be selected
//TODO: WHEN all prompts are answered THEN a password is generated that matches the selected criteria
//TODO: WHEN the password is generated THEN the password is either displayed in an alert or written to the page;