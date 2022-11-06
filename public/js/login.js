const elems = document.getElementById("#modal1");
const logout12 = document.getElementById("#logout-link");
const logout22 = document.getElementById("#logout-link2");
const click12 = document.getElementById("#signup-btn")
const click22 = document.getElementById("#signup-btn2")
document.addEventListener("DOMContentLoaded", function () {
  const elems = document.getElementById("#modal1");
  M.Modal.init(elems);
});
// for a user to login,
const loginHandler = async function (event) {
  //prevent reload for onclick submit
  const instance = M.Modal.getInstance(elems);
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
    instance.destroy()
    document.location.replace("/dashboard");
    passwordEl.innerHTML = ''
    usernameEl.innerHTML = ''
    logout12.classList.remove('hide')
    logout22.classList.remove('hide')
    click12.classList.add('hide')
    click22.classList.add('hide')
  } else {
    alert("Login failed, try again.");
  }
};
// click event listener for login form submission
document
  .querySelector("#login-form")
  .addEventListener("submit", loginHandler);
