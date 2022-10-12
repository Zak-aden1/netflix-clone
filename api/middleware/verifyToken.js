const jwt = require('jsonwebtoken')

const verifyToken = (req, res, next) => {
  const { token } = req.headers
  console.log(req.headers);
  if(!token) return res.status(401).json({error: "you are not authenticated"})

  const t = token.split(' ')[1]
  console.log('token', t);
  jwt.verify(t, process.env.SECRET, (err, user) => {
    if(err) res.status(403).json({error: "token in not vali"})
    req.user = user
    next()
  })

}

module.exports = verifyToken