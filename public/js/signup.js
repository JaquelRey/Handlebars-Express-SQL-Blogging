
document.addEventListener("DOMContentLoaded", function () {
  const elem = document.getElementById("#modal2");
  M.Modal.init(elem, {dismissible: false});
  const instance = M.Modal.getInstance(elem);
  instance.open();
});
// to sign up,
const signupHandler = async function (event) {
  const elems = document.getElementById("#modal2");
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
      passwordEl.innerHTML = ''
      usernameEl.innerHTML = ''
    } else {
      alert('Failed to sign up');
      passwordEl.innerHTML = ''
    }
  };
  // event listener for signup button
  document.querySelector('#signup-form')
  .addEventListener('submit', signupHandler);