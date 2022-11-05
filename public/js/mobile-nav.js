document.addEventListener('DOMContentLoaded', function() {
    var elem = document.querySelectorAll('.modal');
    M.Modal.init(elem);
  });
document.addEventListener('DOMContentLoaded', function() {
    const elem = document.querySelectorAll('.sidenav');
    M.Sidenav.init(elem);
    // const instance = M.Sidenav.getInstance(elem);
});

