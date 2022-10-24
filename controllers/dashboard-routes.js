const router = require('express').Router()
const { Post } = require('../models/')
const auth = require('../utils/auth')

router.get('/', auth, async (req, res) => {

})

router.get('/new', auth, (req, res) => {

})

router.get('/edit/:id', auth, async (req, res) => {

})

module.exports = router
