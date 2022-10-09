const router = require('express').Router()

const User = require('../models/User');

// register
router.post('/', async (req, res) => {
  res.send('loll')
  // User.create

  try {
    const user = User.create(req.body)    
  } catch (error) {
    res.send('err')
  }
})

module.exports = router