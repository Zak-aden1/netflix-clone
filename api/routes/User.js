const Router = require('express').Router();
const User = require('../models/User')
const CryptoJS = require("crypto-js");
const verifyToken = require('../middleware/verifyToken')
const { updateUser, delUser, getUser, getAllUser } = require('../controllers/User')


// get
Router.get('/find/:id', getUser)
// get all
Router.get('/all', verifyToken, getAllUser)

// update
Router.put('/:id', verifyToken, updateUser)

// del
Router.delete('/:id', verifyToken, delUser)

// get user stats

module.exports = Router