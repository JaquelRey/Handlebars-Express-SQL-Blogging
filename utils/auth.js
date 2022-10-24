const auth = (req, res, next) => {
  if (!req.session.userId) {
    res.redirect("/login")
  } else {
    next()
  }
}
// auth for login
module.exports = auth
