function formValidation(){
  var nameField = document.forms["Contact-Us"]["name"].value;
  if(nameField == ""){
    document.getElementById("nameld").style.border = "2px solid red";
    alert("All fields are missing");
    return false;
  }
}
