document.addEventListener("DOMContentLoaded", function () {
  const elem = document.querySelectorAll(".sidenav");
  M.Sidenav.init(elem);
  // const instance = M.Sidenav.getInstance(elem);
});

document.addEventListener("DOMContentLoaded", function () {
  const elem = document.getElementById("#modal2");
  M.Modal.init(elem, {dismissible: false});
  let instance1 = M.Modal.getInstance(elem)
  instance1.open();
});

