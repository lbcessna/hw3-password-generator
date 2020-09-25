// Declare elements that link to index
var passwordEL = document.querySelector("#password");
var btnGenerateEL = document.querySelector("#generate");

// Declare possible characters of generated password.
var lower = "abcdefghijklmnopqrstuvwxyz";
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var number = "1234567890";
var symbol = "!@#$%^&*()[]{}<>.";

//Click event listener.
btnGenerateEL.addEventListener("click", function () {
  passwordEL.textContent = "";// Clear previous password prior to generating a new one.
  
  var pwdLength = prompt("How long of a password do you need?");

  if ((pwdLength >= 8) && (pwdLength <= 128)) {
    var password = "";
    var count = (pwdLength-1);
    var wantLower = confirm("Do you want lowercase letters?");
    var wantUpper = confirm("Do you want uppercase letters?");
    var wantNumber = confirm("Do you want numbers?");
    var wantSymbol = confirm("Do you want to include symbols?");
    
    //Determine possible characters based on user choices
    var possibles = "";
    if (wantLower) {
      possibles += lower;
    }
    if (wantUpper) {
      possibles += upper;
    }
    if (wantNumber) {
      possibles += number;
    }
    if (wantSymbol) {
      possibles += symbol;
    }
    
    for (var i = 0; i < count; i++) {
      password += possibles[(Math.floor(Math.random() * possibles.length))];
    }
  }
  // Attach result to index.html.
  passwordEL.append(password);

});