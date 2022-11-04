const router = require("express").Router();
// require dependency
const { Post } = require("../../models/");
// import post model
const auth = require("../../utils/auth");
// import auth utility

// all post content added to new post from req body using spread
// use session info to add post to logged in user
router.post("/", auth, async (req, res) => {
  const content = req.body;
  try {
    const newPost = await Post.create({
      ...content,
      userId: req.session.userId,
    });
    res.json(newPost);
  } catch (error) {
    res.status(500).json(error);
  }
});

// to update post,
// search for matching post id,
// if matching post exists, update the relavant rows
// if no match (and therefore no rows to update), return 404
// else, return 200
router.put("/:id", auth, async (req, res) => {
  try {
    const [rows] = await Post.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    if (rows > 0) {
      res.status(200).end();
    } else {
      res.status(404).end();
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

// to delete a post,
// search for matching post id,
// if matching post exists, destroy
// if destroy is success, return 200
// else return 404 as no matching post was found
router.delete("/:id", auth, async (req, res) => {
  try {
    const [rows] = Post.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (rows > 0) {
      res.status(200).end();
    } else {
      res.status(404).end();
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
