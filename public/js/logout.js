// to logout,
const logoutf = async function () {
  let elem1 = document.querySelector(".modal1")
  let elem2 = document.querySelector(".modal2")
  // post to logout route
  const res = await fetch("/api/user/logout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });
  // if res = 200, redirect user to the index
  // else, alert user
  if (res.ok) {
    document.location.replace("/");
    elem1.classList.remove('hide')
    elem2.classList.remove('hide')
  } else {
    alert("Logout failed, try again.");
  }
};
// click event listener on logout button
document.querySelector("#logout-link").addEventListener("click", logoutf);
