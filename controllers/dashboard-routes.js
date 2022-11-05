const router = require("express").Router();
// require dependency
const { Post } = require("../models/");
// import post model
const auth = require("../utils/auth");
// get auth utility

// to get all posts,
// find posts with the same user id as current login session
// if found, map all posts individually to an array
// render dashboard with posts
// if no current session found with auth, redirect to the login
router.get("/", auth, async (req, res) => {
  try {
    const data = await Post.findAll({
      where: {
        userId: req.session.userId,
      },
    });
    const posts = data.map((post) => post.get({ plain: true }));
    res.render("all-posts-manage", {
      layout: "dashboard",
      posts,
    });
  } catch (error) {
    console.log(error);
  }
});

// to make a new post,
// render the new post view on dashboard
router.get("/new", auth, (req, res) => {
  res.render("new-post", {
    layout: "dashboard",
  });
});

// to edit a post
// find post by searching for a matching id,
// if exists, render edit view on dashboard with selected post
// if not found, res 404
// if auth not found, redirect to login
router.get("/edit/:id", auth, async (req, res) => {
  try {
    const data = await Post.findByPk(req.params.id);
    if (data) {
      const post = data.get({ plain: true });
      res.render("edit-post", {
        layout: "dashboard",
        post,
      });
    } else {
      res.status(404).end();
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
