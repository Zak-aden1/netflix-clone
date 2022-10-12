
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

const login = async (req, res) => {
  const { email, password: userPassword } = req.body;

  try {
    const user = await User.findOne({email})
    if(!user) return res.status(401).json({error:"Wrong email"})

    const bytes  = CryptoJS.AES.decrypt(user.password, process.env.SECRET);
    const originalPassword = bytes.toString(CryptoJS.enc.Utf8); 

    if(originalPassword !== userPassword) return res.status(401).json({error:"Wrong password"})

    const token = jwt.sign({id: user._id, isAdmin: user.isAdmin}, process.env.SECRET, {expiresIn: '3d'})

    const { password, ...info } = user._doc

    res.status(200).json({...info, token})
  } catch (error) {
    res.status(500).json({error})
  }
}

module.exports = {
  register,
  login
}