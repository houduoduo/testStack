const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())
app.use('/upload', express.static((__dirname + '/upload')))

require('./plugins/db')(app)
require('./routes/admin')(app)


app.listen(3000, () => {
  console.log("http://localhost:3000")
})