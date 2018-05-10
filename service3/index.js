const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hello from service3!'))

app.listen(8080, () => console.log('service3 listening on port 8080!'))