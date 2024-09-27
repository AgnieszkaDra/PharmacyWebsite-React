const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
const PORT = 3001

app.use(cors())
app.use(bodyParser.json())

app.get('/message', (req, res) => {
  const data = { message: 'Hello from Node.js backend!' }
  res.json(data)
})

app.post('/', (req, res) => {
  res.json({ message: 'Data received' })
})
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
