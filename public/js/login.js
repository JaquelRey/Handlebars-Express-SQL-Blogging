document.addEventListener("DOMContentLoaded", function () {
  const elems = document.querySelectorAll(".modal");
  M.Modal.init(elems);
});

const logout12 = document.getElementById("#logout-link");
const logout22 = document.getElementById("#logout-link2");
const click12 = document.getElementById("#signup-btn")
const click22 = document.getElementById("#signup-btn2")
// for a user to login,
const loginHandler = async function (event) {
  //prevent reload for onclick submit
  const elemt = document.getElementById("#modal1");
  event.preventDefault();
  // get user input for username and pw
  const nameElL = document.querySelector("#name-input-login");
  const pwElL = document.querySelector("#pw-input-login");
  // send as json string, with appropriate header
  const res = await fetch("/api/user/login", {
    method: "POST",
    body: JSON.stringify({
      username: nameElL.value,
      password: pwElL.value,
    }),
    headers: { "Content-Type": "application/json" },
  });
  // if user data is verified and fetch succeeds,
  // user is redirected to dashboard.
  // if failed, user is alerted and remains on login view
  if (res.ok) {
    
    document.location.replace("/dashboard");
    pwElL.value = ''
    nameElL.value = ''
    logout12.hidden = false
    logout22.hidden = false
    click12.hidden = false
    click22.hidden = false
    elemt.hidden = true
  } else {
    alert("Login failed, try again.");
    pwElL.value = ''
  }
};
// click event listener for login form submission
document
  .querySelector("#login-form")
  .addEventListener("submit", loginHandler);
