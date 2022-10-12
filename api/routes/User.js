const Router = require('express').Router();
const User = require('../models/User')
const CryptoJS = require("crypto-js");
const verifyToken = require('../middleware/verifyToken')


// get
Router.get('/', verifyToken, (req, res) => {

  res.send('works')
})

// update
Router.get('/:id', verifyToken, (req, res) => {
})

// del

// get all

// get user stats

module.exports = Router