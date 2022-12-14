const router = require('express').Router()
const { Post, Comment, User } = require('../models/')

// to view all posts on homepage,
// find all posts and include related user
// map each individually,
// render all posts view with post data
router.get('/', async (req, res) => {
  try {
    const data = await Post.findAll({
      include: [User],
    })

    const posts = data.map((post) => post.get({ plain: true }));

    res.render('all-posts', { posts })
  } catch (error) {
    res.status(500).json(error)

  }
})

// to view one post,
// find post that matches req id,
// if found, include related user and comments with their related users
// create post from all data and render that to single post view
// if matching id not found, return 500
router.get('/post/:id', async (req, res) => {
  try {
    const data = await Post.findByPk(req.params.id, {
      include: [User,
        {
          model: Comment,
          include: [User],
        },],
    })
    if (data) {
      const post = data.get({ plain: true });
      res.render('single-post', { post })
    } else {
      res.status(500).json(error)
    }
  } catch (error) {
    res.status(500).json(error)
  }
})

module.exports = router
