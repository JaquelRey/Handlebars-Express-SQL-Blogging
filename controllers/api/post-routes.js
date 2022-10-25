const router = require('express').Router()
const { Post } = require('../../models/')
const auth = require('../../utils/auth')

// post content added by using spread
router.post('/', auth, async (req, res) => {
  const content = req.body
  try {
    const newPost = await Post.create({ ...content, userId: req.session.userId })
    res.json(newPost)
  } catch (error) {
    res.status(500).json(error)
  }
})

// to update, search for matching post id and return success if found and updated
router.put('/:id', auth, async (req, res) => {
  try {
    const [rows] = await Post.update(req.body, {
        where: {
        id: req.params.id,
      },
    })

    if (rows > 0) {
      res.status(200).end()
    } else {
      res.status(404).end()
    }
  } catch (error) {
    res.status(500).json(error)
  }
})

// to delete, search for matching post id and return success if found and deleted
router.delete('/:id', auth, async (req, res) => {
  try {
    const [rows] = Post.destroy({
        where: {
        id: req.params.id,
      },
    })

    if (rows > 0) {
      res.status(200).end()
    } else {
      res.status(404).end()
    }
  } catch (error) {
    res.status(500).json(error)
  }
})

module.exports = router
