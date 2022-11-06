document.addEventListener("DOMContentLoaded", function () {
  const elems = document.querySelectorAll('.modal')
  M.Modal.init(elems);
  let elem2 = document.querySelector(".modal2")
  elem2.open({dismissible: false})
});
const logout = document.getElementById("#logout-link");
const logout2 = document.getElementById("#logout-link2");
const click = document.getElementById("#signup-btn")
const click2 = document.getElementById("#signup-btn2")
// to sign up,
const signupHandler = async function (event) {
  const elem = document.querySelectorAll("#modal2");
  let instance1 = M.Modal.getInstance(elem);
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
      instance1.destroy()
      document.location.replace("/dashboard");
      passwordEl.innerHTML = ''
      usernameEl.innerHTML = ''
      logout.classList.remove('hide')
      logout2.classList.remove('hide')
      click.classList.add('hide')
      click2.classList.add('hide')
    } else {
      alert('Failed to sign up');
      passwordEl.innerHTML = ''
    }
  };
  // event listener for signup button
  document.querySelector('#signup-form')
  .addEventListener('submit', signupHandler);