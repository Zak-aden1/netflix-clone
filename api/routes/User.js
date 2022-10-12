const Router = require('express').Router();
const User = require('../models/User')
const CryptoJS = require("crypto-js");
const verifyToken = require('../middleware/verifyToken')
const { updateUser } = require('../controllers/User')


// get
Router.get('/', verifyToken, (req, res) => {
  console.log(req.user);

  res.send('works')
})

// update
Router.put('/:id', verifyToken, updateUser)

// del

// get all

// get user stats

module.exports = Router