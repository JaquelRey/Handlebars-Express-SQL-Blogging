const router = require('express').Router();
const { Comment } = require('../../models/');
const auth = require('../../utils/auth');

router.post('/', auth, async (req, res) => {
  
});

module.exports = router;
