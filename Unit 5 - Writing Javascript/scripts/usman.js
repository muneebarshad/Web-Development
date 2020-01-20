/*
* HTML. (n.d.). Retrieved from https://www.w3schools.com/default.asp.
* The slideshow functionality is taken from: https://www.w3schools.com/
*/

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("homePageSlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}


/*
* HTML. (n.d.). Retrieved from https://www.w3schools.com/default.asp.
* The validateContactUsForm function is taken from: https://www.w3schools.com/
*/
function validateContactUsForm() {
  var nameField = document.forms["contactUsForm"]["Name"].value;
  var emailField = document.forms["contactUsForm"]["email"].value;
  var messageField = document.forms["contactUsForm"]["message"].value;
  if (nameField == "" && emailField == "" && messageField == "" ) {
    document.getElementById("nameField").style.border = "2px solid red";
    document.getElementById("emailField").style.border = "2px solid red";
    document.getElementById("messageField").style.border = "2px solid red";
    document.getElementById("phoneField").style.border = "2px solid red";
    alert("All fields are missing");
    return false;
  }
  if (nameField == "") {
    document.getElementById("nameField").style.border = "2px solid red";
    return false;
  }
  if (emailField == "") {
    document.getElementById("emailField").style.border = "2px solid red";
    return false;
  }
  if (messageField == "") {
    document.getElementById("messageField").style.border = "2px solid red";
    return false;
  }

  var checkPhoneNumber = phonenumber(document.getElementById("phoneField"));
  if (checkPhoneNumber == false) {
    alert("The Phone Number is not valid.");
    document.getElementById("phoneField").style.border = "2px solid red";
    return false;
  }
}

/*
*
* The phonenumber function is taken from:
Validate phone number using javascript.
Retrieved from https://stackoverflow.com/questions/18375929/validate-phone-number-using-javascript.
*/
function phonenumber(inputtxt) {
  const phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  if(inputtxt.value.match(phoneno)) {
    return true;
  }
  else {
    return false;
  }
}
