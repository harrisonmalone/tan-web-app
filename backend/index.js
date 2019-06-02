// requires
const fs = require('fs');
const express = require('express')
const cors = require('cors')
const axios = require('axios')

// express setup
const app = express();
const port = process.env.PORT || 5000

// middleware
app.use(cors());

app.get('/', (req, res) => {
  axios.get('https://thetanwebapp.s3-ap-southeast-2.amazonaws.com/tan_all_time.json')
    .then((response) => {
      res.send(response.data)
    })
})

app.listen(port, () => {
  console.log('listening on port 5000')
})
// hello