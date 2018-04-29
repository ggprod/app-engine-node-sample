const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hello from service1!'))

app.listen(8080, () => console.log('service1 listening on port 8080!'))