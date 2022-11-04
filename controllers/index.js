const router = require('express').Router()
// require dependency
const apiRoutes = require('./api/')
// get configured routes for posts, comments, and users
const homeRoutes = require('./home-routes.js')
// get homepage routes
const dashboardRoutes = require('./dashboard-routes.js')
// get dashboard routes

// add paths
router.use('/', homeRoutes)
router.use('/dashboard', dashboardRoutes)
router.use('/api', apiRoutes)
// export to use in server
module.exports = router
