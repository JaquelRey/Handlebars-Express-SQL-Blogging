const router = require("express").Router();
const { Comment } = require("../../models/");
const auth = require("../../utils/auth");

// only post needed for the comments
router.post("/", auth, async (req, res) => {
  // spread req body to get all comment content,
  // create new comment object belonging to logged in user
  // return success if promise completes after await
  try {
    const comment = await Comment.create({
      ...req.body,
      userId: req.session.userId,
    });
    res.json(comment);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
