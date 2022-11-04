const router = require("express").Router();
// require dependency
const { User } = require("../../models");
//import user model

// to create a new user,
// use username and pw to create a new user
// then, login the new user and save a new session
// res new user
router.post("/", async (req, res) => {
  try {
    const user = await User.create({
      username: req.body.username,
      password: req.body.password,
    });
    req.session.save(() => {
      req.session.userId = user.id;
      req.session.username = user.username;
      req.session.loggedIn = true;
      res.json(user);
    });
  } catch (error) {
    res.status(500).json(error);
  }
});

// to login an existing user,
// search for a user with a matching username
// if found, check if entered PW is correct
// if pw correct, create new logged in session for user
// if pw incorrect or user not found, return 400 with incorrect message
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({
      where: {
        username: req.body.username,
      },
    });
    if (!user) {
      res.status(400).json({ message: "Incorrect credentials!" });
      return;
    }
    const valid = user.verifyPw(req.body.password);
    if (!valid) {
      res.status(400).json({ message: "Incorrect credentials!" });
      return;
    }
    req.session.save(() => {
      req.session.userId = user.id;
      req.session.username = user.username;
      req.session.loggedIn = true;
      res.json({ user, message: "Success! You're logged in." });
    });
  } catch (error) {
    res.status(400).json({ message: "Account not found!" });
  }
});

// to logout a user,
// check for login session
// if found, destroy session and return 204
// else return 404
router.post("/logout", (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
