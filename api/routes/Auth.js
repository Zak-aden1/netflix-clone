const router = require('express').Router()
const { register } = require('../controllers/Auth')

// register
router.post('/register', register)

module.exports = router