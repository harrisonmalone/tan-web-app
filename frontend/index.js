const container = document.querySelector(".container")
const loading = document.querySelector(".loading")

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
  const h1 = `
    <h1>Best Tan Times 🏃‍♂️🏃‍♀️</h1>
  `
  document.body.removeChild(loading)
  container.insertAdjacentHTML("afterbegin", h1)
}

fetch("https://tan-web-app.harrisonnmalone.now.sh/")
  .then((res) => {
    return res.json()
  })
  .then((data) => {
    render(data)
  })