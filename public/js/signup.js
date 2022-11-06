
document.addEventListener("DOMContentLoaded", function () {
  const elems = document.querySelectorAll(".modal2");
  const instance = M.Modal.init(elems, {dismissible: false});
  instance.open();
});
// to sign up,
const signupHandler = async function (event) {
  const elems = document.querySelectorAll(".modal2");
  const instance = M.Modal.init(elems);
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
      instance.close()
      document.location.replace("/dashboard");
    } else {
      alert("Sign up failed, try again.");
    }
  };
  // event listener for signup button
  document.querySelector("#signup-button").addEventListener("click", signupHandler);