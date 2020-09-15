const express = require('express')
var bodyParser = require('body-parser')
const app = express()
const port = 3000

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse application/json
app.use(bodyParser.json())
app.use(bodyParser.raw());

const routes = require('./routes');
/* app.get('/', (req, res) => {
  res.send('Hello World!')
}) */
app.use('/api', routes);

app.listen(port, () => {
  console.log(`server running on port ${port}`)
})