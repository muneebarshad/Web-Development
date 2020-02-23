/*
 * This script is a babel compiled version of switchScript.js (Only intended to be run on IE 11 or older).
 * The orginal script follows the ES6 standard, however IE 11 and older uses ES5. Classes are not supported in ES5.
 * As such, this compiled version will allow backwards compatiblity with ES5.
 *
 * This script was compiled using Babel, https://babeljs.io/
 */

"use strict";

//if messageFiled is empty or message length is less than 20 then return false
function formValidation() {
  cleanErrorMessage();

  if (!validateName() || !validateEmail() || !validatePhone() || !validateMessage()) {
    return false;
  }
} //if name field is empty it will return false


function validateName() {
  var nameField = document.forms["Contact-Us"]["name"].value;

  if (nameField == "") {
    errorMessage("Name can not me empty", 0);
    document.getElementById("nameld").style.border = "1px solid rgb(221, 86, 43)";
    return false;
  }

  return true;
} //if emailField is empty or does not include char @ or . then return false


function validateEmail() {
  var emailField = document.forms["Contact-Us"]["email"].value;

  if (emailField == "") {
    errorMessage("Email can not me empty", 1);
    document.getElementById("emailId").style.border = "1px solid rgb(221, 86, 43)";
    return false;
  } else if (emailField.indexOf("@") == -1 || emailField.indexOf(".") == -1) {
    errorMessage("Invalid email", 1);
    document.getElementById("emailId").style.border = "1px solid rgb(221, 86, 43)";
    return false;
  }

  return true;
} // if phoneFiled is empty or does not have length 10 or include characters other then number return false


function validatePhone() {
  var phoneField = document.forms["Contact-Us"]["phone"].value;

  if (phoneField == "") {
    errorMessage("Phone number required", 2);
    document.getElementById("phoneId").style.border = "1px solid rgb(221, 86, 43)";
    return false;
  } else if (phoneField.length != 10) {
    errorMessage("Phone number should be 10 digits", 2);
    document.getElementById("phoneId").style.border = "1px solid rgb(221, 86, 43)";
    return false;
  } //https://stackoverflow.com/questions/24128659/contact-form-validation-javascript
  else if (!phoneField.match(/^[0-9]{10}$/)) {
      errorMessage("Phone number invalid", 2);
      document.getElementById("phoneId").style.border = "1px solid rgb(221, 86, 43)";
      return false;
    }

  return true;
} //if messageFiled is empty or message length is less than 20 then return false


function validateMessage() {
  var messageField = document.forms["Contact-Us"]["message"].value;

  if (messageField.length < 20) {
    errorMessage("Message shoud contain more than 20 characters", 3);
    document.getElementById("messageId").style.border = "1px solid rgb(221, 86, 43)";
    return false;
  }

  return true;
} //remove any message from HTML


function cleanErrorMessage() {
  document.getElementById("messageId").style.border = "1px solid #ccc";
  document.getElementById("phoneId").style.border = "1px solid #ccc";
  document.getElementById("emailId").style.border = "1px solid #ccc";
  document.getElementById("nameld").style.border = "1px solid #ccc";



  var message = document.getElementById("message");
  if(message != null){
    message.parentNode.removeChild(message);
  }
} //Add error message to HTML


function errorMessage(message, index) {
  //remove error message from previous errors
  cleanErrorMessage();
  var error = document.createElement("message");
  error.setAttribute("id","message");
  error.innerText = "*" + message + "*";
  document.getElementsByClassName("errorMessage")[index].appendChild(error);
}
