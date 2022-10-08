const express = require('express')
require('dotenv').config();
const mongoose = require('mongoose')

const app = express();

app.use('/', (req, res) => {
  res.send('working')
})

const port = process.env.PORT

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(port, () => {  
      console.log('app is running on port', port);
    })
  })
  .catch(err => console.log('err', err))
