// to logout,
const logout = async function () {
  // post to logout route
  const res = await fetch("/api/user/logout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });
  // if res = 200, redirect user to the index
  // else, alert user
  if (res.ok) {
    document.location.replace("/");
  } else {
    alert("Logout failed, try again.");
  }
};
// click event listener on logout button
document.querySelector("#logout-link").addEventListener("click", logout);
