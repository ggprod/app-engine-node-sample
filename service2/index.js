const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hello from service2!'))

app.listen(8080, () => console.log('service2 listening on port 8080!'))