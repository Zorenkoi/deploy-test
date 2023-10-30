import express from 'express'

const app = express()
const PORT = 4444

app.get('/', (req, res) => {
  res.end(`<h1>MY APP Bitch</h1>`)
})
app.get('/home', (req, res) => {
  res.end(`<h1>MY APP Bitch homik</h1>`)
})

app.listen(PORT, () => {
  console.log('server pashet na portu: 4000')
})
