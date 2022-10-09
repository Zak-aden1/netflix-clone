
const User = require('../models/User');
const CryptoJS = require("crypto-js");
const jwt = require('jsonwebtoken')


const register = async (req, res) => {
  const { username, password, email } = req.body;

  const secretKey = process.env.SECRET

  try {
    const user = await User.create({
      username,
      password: CryptoJS.AES.encrypt(password, secretKey).toString(),
      email
    })    
    res.status(201).json(user)
  } catch (error) {
    res.status(400).json({error})
  }
}

module.exports = {
  register
}