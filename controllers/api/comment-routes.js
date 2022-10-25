const router = require('express').Router()
const { Comment } = require('../../models/')
const auth = require('../../utils/auth')


// only post needed

router.post('/', auth, async (req, res) => {
  // spread comment content, log to user
// return success if promise completes
  try {
    const comment = await Comment.create({
      ...req.body,
      userId: req.session.userId,
    })
    res.json(comment)
  } catch (error) {
    res.status(500).json(error)
  }
})

module.exports = router
