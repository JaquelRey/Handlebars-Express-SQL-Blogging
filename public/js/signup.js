document.addEventListener("DOMContentLoaded", function () {
  const elems = document.querySelectorAll('.modal')
  M.Modal.init(elems, {dismissible: false});
  // let elem2 = document.querySelector(".modal2")
  // elem2.open()
});
const logout = document.getElementById("#logout-link");
const logout2 = document.getElementById("#logout-link2");
const click = document.getElementById("#signup-btn")
const click2 = document.getElementById("#signup-btn2")
// to sign up,
const signupHandler = async function (event) {
    const elem = document.querySelectorAll(".modal2");
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
      pwEl.value = ''
      nameEl.value = ''
      logout.hidden = false
      logout2.hidden = false
      click.hidden = false
      click2.hidden = false
      elem.hidden = true
    } else {
      alert('Failed to sign up');
      pwEl.value = ''
    }
  };
  // event listener for signup button
  document.querySelector('#signup-form')
  .addEventListener('submit', signupHandler);