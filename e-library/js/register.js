// show password
var show = document.getElementById("pws");
var eye = document.getElementById("eye");

function pswshow() {
  if (show.type == "password") {
    show.type = "text";
    eye.className = "fa-solid fa-eye";
    if (eye.className == "fa-solid fa-eye") {
      eye.style.color = "red";
    }
  } else {
    show.type = "password";
    eye.className = "fa-solid fa-eye-slash";
    if (eye.className == "fa-solid fa-eye-slash") {
      eye.style.color = "black";
    }
  }
}
eye.onclick = pswshow;

//  password confirm
var show2 = document.getElementById("pwsconfirm");
var eye2 = document.getElementById("eyepswconfirm");

function pswshowconfirm() {
  if (show2.type == "password") {
    show2.type = "text";
    eye2.className = "fa-solid fa-eye";
    if (eye2.className == "fa-solid fa-eye") {
      eye2.style.color = "red";
    }
  } else {
    show2.type = "password";
    eye2.className = "fa-solid fa-eye-slash";
    if (eye2.className == "fa-solid fa-eye-slash") {
      eye2.style.color = "black";
    }
  }
}
eye2.onclick = pswshowconfirm;

// form validation

var form = document.getElementById("form");
var firstname = document.getElementById("firstname");
var email = document.getElementById("email");
var firstnameError = document.getElementById("Errors");

form.addEventListener("submit", (e) => {
  var messages = [];

  // first name
  if (firstname.value == "" || firstname.value == null) {
    messages.push("*First name is Required <br>");
  }

  //  email
  if (email.value == "" || email.value == null) {
    messages.push("*email is Required <br>");
  }

  // password
  if (show.value == "" || show.value == null) {
    messages.push("*password is Required  <br>");
  }
  if (show.value.length <= 6) {
    messages.push("*password  must be greater than 6 character <br>");
  }
  if (show.value.length >= 20) {
    messages.push("*password  must not be greater than 20 character <br>");
  }

  //  confirm password
  if (show2.value == "" || show2.value == null) {
    messages.push("*Confirm password is Required  <br>");
  }
  if (show2.value.length <= 6) {
    messages.push("*Confirm password  must be greater than 6 character <br>");
  }
  if (show2.value.length >= 20) {
    messages.push(
      "*Confirm password  must not be greater than 20 character <br>"
    );
  }

  // passord and confirm password  is equel
  if (show.value != show2.value) {
    messages.push("* password and Confirm password are not equel  ");
  }

  if (messages.length > 0) {
    e.preventDefault();
    firstnameError.style.background = "#f8d7da";
    firstnameError.innerHTML = messages.join(" ");
  }
});
