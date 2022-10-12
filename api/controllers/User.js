// register 
const User = require('../models/User')
const CryptoJS = require("crypto-js");

const updateUser = async (req, res) => {
  if(req.user.id === req.params.id || req.user.isAdmin) {
   if(req.body.password) {
     const password = CryptoJS.AES.encrypt(req.body.password, process.env.SECRET).toString();
     req.body.password = password
   }
   try {
     const updatedUser = await User.findByIdAndUpdate(req.params.id, {...req.body})
     return res.status(200).json(updatedUser)
   } catch (error) {
     res.status(500).json({error})
   }

  } else return res.status(403).json({error: "Forbidden to change user details"})
};

module.exports = {
  updateUser
}