document.addEventListener("DOMContentLoaded", function () {
  const elems = document.querySelector(".modal1");
  M.Modal.init(elems);
});
// for a user to login,
const loginHandler = async function (event) {
  //prevent reload for onclick submit
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
  } else {
    alert("Login failed, try again.");
  }
};
// click event listener for login form submission
document.querySelector("#login-button").addEventListener("click", loginHandler);
