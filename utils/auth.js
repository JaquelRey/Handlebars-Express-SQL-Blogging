// auth utility
// takes request, response, and next action
// if there's no valid session logged in,
// redirect user to login
// else, go next
const auth = (req, res, next) => {
  if (!req.session.userId) {
    res.redirect("/login");
  } else {
    next();
  }
};

module.exports = auth;
