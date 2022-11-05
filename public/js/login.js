document.addEventListener('DOMContentLoaded', function() {
  var elem = document.querySelectorAll('.modal');
  M.Modal.init(elem);
});

// for a user to login,
const loginHandler = async function (event) {
  //prevent reload for onclick submit
  event.preventDefault();
  // get user input for username and pw
  const nameEl = document.querySelector("#name-input-login");
  const pwEl = document.querySelector("#pw-input-login");
  // send as json string, with appropriate header
  const res = await fetch("/api/user/login", {
    method: "POST",
    body: JSON.stringify({
      username: nameEl.value,
      password: pwEl.value,
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
