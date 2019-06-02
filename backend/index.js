// requires
const fs = require('fs');
const express = require('express')
const cors = require('cors')

// express setup
const app = express();

// middleware
app.use(cors());

app.get('/', (req, res) => {
  fs.readFile('./tan_all_time.json', 'utf-8', (err, data) => {
    if (err) throw err.message;
    res.send(data)
  })
})

app.listen(5000, () => {
  console.log('listening on port 8000')
})