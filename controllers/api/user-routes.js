const router = require('express').Router()
const { User } = require('../../models')

router.post('/', async (req, res) => {
  try {
    const user = await User.create({
      username: req.body.username,
      password: req.body.password,
    })

    req.session.save(() => {
      req.session.userId = user.id
      req.session.username = user.username
      req.session.loggedIn = true
      res.json(user)
    })
  } catch (error) {
    res.status(500).json(error)
  }
})

router.post('/login', async (req, res) => {
  try {
    const user = await User.findOne({
      where: {
        username: req.body.username,
      },
    })

    if (!user) {
      res.status(400).json({ message: 'Account not found!' })
      return
    }

    const valid = user.verifyPw(req.body.password)

    if (!valid) {
      res.status(400).json({ message: 'Account not found!' })
      return
    }

    req.session.save(() => {
      req.session.userId = user.id
      req.session.username = user.username
      req.session.loggedIn = true
      res.json({ user, message: 'Success! You\'re logged in.' })
    })
  } catch (error) {
    res.status(400).json({ message: 'Account not found!' })
  }
})

router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end()
    })
  } else {
    res.status(404).end()
  }
})

module.exports = router
