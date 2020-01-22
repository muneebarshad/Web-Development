function formValidation(){
  cleanErrorMessage();
  if(!validateName() || !validateEmail() || !validatePhone() || !validateMessage()){
    return false;
  }
}

function validateName(){
  var nameField = document.forms["Contact-Us"]["name"].value;
  if(nameField == ""){
    errorMessage("Name can not me empty",0);
    document.getElementById("nameld").style.border = "1px solid rgb(221, 86, 43)";
    return false;
  }
  return true;

}

function validateEmail(){
  var emailField = document.forms["Contact-Us"]["email"].value;
  if(emailField == ""){
    errorMessage("Email can not me empty",1);
    document.getElementById("emailId").style.border = "1px solid rgb(221, 86, 43)";
    return false;
  }
  else if(!emailField.includes("@") || !emailField.includes(".") ){
    errorMessage("Invalid email",1);
    document.getElementById("emailId").style.border = "1px solid rgb(221, 86, 43)";
    return false;
  }
  return true;
}

function validatePhone(){
  var phoneField = document.forms["Contact-Us"]["phone"].value;
  if(phoneField == ""){
    errorMessage("Phone number required",2);
    document.getElementById("phoneId").style.border = "1px solid rgb(221, 86, 43)";
    return false;
  }
  else if(phoneField.length != 10){
    errorMessage("Phone number should be 10 digits",2);
    document.getElementById("phoneId").style.border = "1px solid rgb(221, 86, 43)";
    return false;
  }
  //https://stackoverflow.com/questions/24128659/contact-form-validation-javascript
  else if(!phoneField.match(/^[0-9]{10}$/)){
    errorMessage("Phone number invalid",2);
    document.getElementById("phoneId").style.border = "1px solid rgb(221, 86, 43)";
    return false;
  }
  return true;
}

function validateMessage(){
  var messageField = document.forms["Contact-Us"]["message"].value;
  if(messageField.length < 20){
    errorMessage("Message shoud contain more than 20 characters",3);
    document.getElementById("messageId").style.border = "1px solid rgb(221, 86, 43)";
    return false;
  }
  return true
}

function cleanErrorMessage(){
  var prevMessage = document.getElementsByTagName("message");
  document.getElementById("messageId").style.border = "1px solid #ccc";
  document.getElementById("phoneId").style.border = "1px solid #ccc";
  document.getElementById("emailId").style.border = "1px solid #ccc";
  document.getElementById("nameld").style.border = "1px solid #ccc";
  for(i=0; i < prevMessage.length; i++){
    prevMessage[i].remove();
  }
}

function errorMessage(message,index){
  cleanErrorMessage()
  var error = document.createElement("message");
  error.innerText = "*" + message + "*";
  document.getElementsByClassName("errorMessage")[index].appendChild(error);

}
