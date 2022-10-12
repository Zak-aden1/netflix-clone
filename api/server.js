const express = require('express')
require('dotenv').config();
const mongoose = require('mongoose')
const authRouter = require('./routes/Auth')
const userRouter = require('./routes/User')

const app = express();

// middleware
app.use(express.json())

// routes
app.use('/api/auth', authRouter)
app.use('/api/user', userRouter)

const port = process.env.PORT

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(port, () => {  
      console.log('app is running on port', port);
    })
  })
  .catch(err => console.log('err', err));