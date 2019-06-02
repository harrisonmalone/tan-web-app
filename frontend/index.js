const container = document.querySelector(".container")

const renderRow = (athlete, index) => {
  index += 1
  const p = `
    <p>${index} | ${athlete.name} | ${athlete.time} | ${athlete.year} | ${athlete.gender} </p>
  `
  container.insertAdjacentHTML("beforeend", p)
}

const render = (data) => {
  data.rankings.forEach((row, index) => {
    renderRow(row, index)
  }) 
}


fetch("http://localhost:5000/")
  .then((res) => {
    return res.json()
  })
  .then((data) => {
    render(data)
  })