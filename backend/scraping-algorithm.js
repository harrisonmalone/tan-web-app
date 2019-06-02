const fs = require('fs');
const parse = require('csv-parse');

const cleanData = (output) => {
  output.splice(0, 2)
  const result = {
    rankings: []
  }
  output.forEach((athlete) => {
    athleteObj = {}
    athleteObj.name = athlete[2]
    athleteObj.gender = athlete[4]
    athleteObj.time = athlete[6]
    athleteObj.year = athlete[7]
    result.rankings.push(athleteObj)
  })
  return result
}

const parseData = (data) => {
  parse(data, function(err, output){
    if (err) throw err.message
    const json = cleanData(output)
    fs.writeFileSync('./tan_all_time.json', JSON.stringify(json), 'utf-8')
  })
}

fs.readFile('./tan_all_time.csv', 'utf-8', (err, data) => {
  if (err) throw err;
  parseData(data)
});