const express = require('express')

const app = express();

app.use('/', (req, res) => {
  res.send('working')
})

app.listen(4000, () => {
  console.log('app is running on port', 4000);
})