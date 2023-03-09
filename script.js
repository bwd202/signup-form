// alert("hello");

let pwd = document.querySelector("#pwd");

let pwdConfirm = document.querySelector("#pwd-confirm");

let button = document.querySelector("button");

button.addEventListener("click", checkPwd);

function checkPwd() {
  if (pwd.value === pwdConfirm.value) return;

  alert("Passwords do not match");
}
