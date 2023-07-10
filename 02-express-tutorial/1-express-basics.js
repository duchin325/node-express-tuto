const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Home Page')
})
app.get('/about', (req, res) => {
    res.send('About Page')
})
app.all('*', (req, res) => {
    res.status(404).send('Resource not found')
})




app.listen(5000, () => {
    console.log('Server is running on port 5000...')
})

