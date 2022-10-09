const express = require('express')
require('dotenv').config();
const mongoose = require('mongoose')
const authRouter = require('./routes/Auth')

const app = express();

// middleware
app.use(express.json())


app.use('/api/auth', authRouter)

const port = process.env.PORT

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(port, () => {  
      console.log('app is running on port', port);
    })
  })
  .catch(err => console.log('err', err))
