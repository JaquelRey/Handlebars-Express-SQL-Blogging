const router = require('express').Router()
const { Post } = require('../../models/')
const auth = require('../../utils/auth')

router.post('/', auth, async (req, res) => {
  const body = req.body

})

router.put('/:id', auth, async (req, res) => {
 
})

router.delete('/:id', auth, async (req, res) => {
  
})

module.exports = router
