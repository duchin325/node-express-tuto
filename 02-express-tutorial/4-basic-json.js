const express = require('express')
const app = express()
const {tours} = require('./data')

app.get('/', (req, res) => {
    res.json(tours)
})




app.listen(5000, () => {
    console.log('Server running on port 5000...')
})
