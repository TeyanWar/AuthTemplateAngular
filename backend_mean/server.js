
var express = require('express')
var cors = require('cors')
var app = express()

var laObjects = [
    {name: 'Esteban'},
    {name: 'Danilo'}
]

app.use(cors())

app.get('/posts', (req, res) => {
    res.send(laObjects)
})

app.listen(3000)