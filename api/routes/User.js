const Router = require('express').Router();
const User = require('../models/User')
const CryptoJS = require("crypto-js");
const verifyToken = require('../middleware/verifyToken')
const { updateUser, delUser, getUser } = require('../controllers/User')


// get
Router.get('/find/:id', verifyToken, getUser)

// update
Router.put('/:id', verifyToken, updateUser)

// del
Router.delete('/:id', verifyToken, delUser)
// get all

// get user stats

module.exports = Router