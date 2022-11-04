const router = require('express').Router()
// import express (router) dependency
// import routes for users, posts, and comments
const userRoutes = require('./user-routes.js')
const postRoutes = require('./post-routes')
const commentRoutes = require('./comment-routes')
// use router to path for each route
router.use('/user', userRoutes)
router.use('/post', postRoutes)
router.use('/comment', commentRoutes)
// export configured router for use
module.exports = router