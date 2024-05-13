const express = require('express')

const app = express()
const port = 80

console.log('test commit')

app.use(express.static('frontend/dist'))

app.listen(port, () => console.log('Server has been started on port 80 ...'))
