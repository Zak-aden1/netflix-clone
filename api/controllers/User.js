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
     const updatedUser = await User.findByIdAndUpdate(req.params.id, {...req.body}, {new: true})
     return res.status(200).json(updatedUser)
   } catch (error) {
     res.status(500).json({error})
   }

  } else return res.status(403).json({error: "Forbidden to change user details"})
};

const delUser = async (req, res) => {
  if(req.user.isAdmin) {
    try {
      const user = await User.findByIdAndDelete(req.params.id)
      if(!user) return res.status(404).json({error: "unable to find user"})
      return res.status(user).json(user)
    } catch (error) {
      res.status(500).json(error)
    }
  } else return res.status(403).json({error: "only admins are able to delete"})
}

module.exports = {
  updateUser,
  delUser
}