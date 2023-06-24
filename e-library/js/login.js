var form = document.getElementById("form");
var email = document.getElementById("email");
var password = document.getElementById("password");
var allErrors = document.getElementById("Errors");

form.addEventListener("submit", (e) => {
  var messages = [];

  //  email
  if (email.value == "" || email.value == null) {
    messages.push("*email is Required <br>");
  }

  // password
  if (password.value == "" || password.value == null) {
    messages.push("*password is Required  <br>");
  }

  if (messages.length > 0) {
    e.preventDefault();
    allErrors.style.background = "#f8d7da";
    allErrors.innerHTML = messages.join(" ");
  }
});




// show password
var eye = document.getElementById("eye");

function pswshow() {
  if (password.type == "password") {
    password.type = "text";
    eye.className = "fa-solid fa-eye";
    if (eye.className == "fa-solid fa-eye") {
      eye.style.color = "red";
    }
  } else {
    password.type = "password";
    eye.className = "fa-solid fa-eye-slash";
    if (eye.className == "fa-solid fa-eye-slash") {
      eye.style.color = "black";
    }
  }
}
eye.onclick = pswshow;

