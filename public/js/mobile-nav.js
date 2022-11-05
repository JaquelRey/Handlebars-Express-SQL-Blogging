const loginId = document.querySelectorAll(".modal1");
const signupId = document.querySelectorAll(".modal2");
const login = M.Modal.getInstance(loginId);
const signup = M.Modal.getInstance(signupId);

document.addEventListener("DOMContentLoaded", function () {
  const elems = document.querySelectorAll(".modal");
  M.Modal.init(elems);
});

function openLogin() {
  login.open();
}
function closeLogin() {
  login.close();
}
function openSignup() {
  signup.open();
}
function closeSignup() {
  signup.close();
}

document.addEventListener("DOMContentLoaded", function () {
  const elem = document.querySelectorAll(".sidenav");
  M.Sidenav.init(elem);
  // const instance = M.Sidenav.getInstance(elem);
});
