const express = require('express')
const app = express()
const people = require('./routes/people')
const auth = require('./routes/auth')

// parse form data
app.use(express.urlencoded({ extended: false }))
// perse json
app.use(express.json())
// person routes
app.use('/api/people', people)
// login route
app.use('/login', auth)

// set up server
app.listen(5000, () => {
    console.log('Server running on port 5000...')
})