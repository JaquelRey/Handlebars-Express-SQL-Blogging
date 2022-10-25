const router = require('express').Router()
const { Post } = require('../models/')
const auth = require('../utils/auth')

router.get('/', auth, async (req, res) => {
  try {
    const data = await Post.findAll({
      where: {
        userId: req.session.userId,
      },
    })

    const posts = data.map((post) => post.get({ plain: true }))

    res.render('all-posts-manage', {
      layout: 'dashboard',
      posts,
    })
  } catch (error) {
    console.log(error)
    res.redirect('login')
  }
})

router.get('/new', auth, (req, res) => {
  res.render('new-post', {
    layout: 'dashboard',
  })
})
// find post by id; if exists, render edit and send data
router.get('/edit/:id', auth, async (req, res) => {
  try {
    const data = await Post.findByPk(req.params.id)

    if (data) {
      const post = data.get({ plain: true })
      res.render('edit-post', {
        layout: 'dashboard',
        post,
      })
    } else {
      res.status(404).end()
    }
  } catch (error) {
    res.redirect('login')
  }
})

module.exports = router
