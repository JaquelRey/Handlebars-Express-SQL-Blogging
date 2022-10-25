const router = require('express').Router()
const { Post, Comment, User } = require('../models/')

// get all posts
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

// get one post
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
// login if session verify
router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/')
    return
  }

  res.render('login')
})
// sign up
router.get('/signup', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/')
    return
  }

  res.render('signup')
})

module.exports = router
