document.addEventListener('DOMContentLoaded', function() {
  var elem = document.querySelectorAll('.modal');
  M.Modal.init(elem);
});
// to sign up,
const signupHandler = async function (event) {
  // prevent reload on form submit
  event.preventDefault();
  // get user input for username and password
  const nameEl = document.querySelector("#name-input-signup");
  const pwEl = document.querySelector("#pw-input-signup");
  // send as json to the user route
  const res = await fetch("/api/user", {
    method: "POST",
    body: JSON.stringify({
      username: nameEl.value,
      password: pwEl.value,
    }),
    headers: { "Content-Type": "application/json" },
  });
  // if signup successful ans promise fulfilled,
  // redirect user to their dashboard
  // else, alert user to failure
  if (res.ok) {
    document.location.replace("/dashboard");
  } else {
    alert("Sign up failed, try again.");
  }
};
// event listener for signup button
document.querySelector("#signup").addEventListener("click", signupHandler);
