// requires
const fs = require('fs');
const express = require('express')
const cors = require('cors')

// express setup
const app = express();
const port = process.env.PORT || 5000

// middleware
app.use(cors());

app.get('/hello', (req, res) => {
  fs.readFile('./tan_all_time.json', 'utf-8', (err, data) => {
    if (err) throw err.message;
    res.send(data)
  })
})

app.listen(port, () => {
  console.log('listening on port 5000')
})