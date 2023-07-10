const express = require('express')
const app = express()
const {tours} = require('./data')

app.get('/', (req, res) => {
    res.send('<h1> Home Page </h1> <a href="/api/tours"> Tours</a>')
})

app.get('/api/tours', (req, res) => {
    const newTours = tours.map((tour) => {
        const {id, name, image} = tour;
        return {id, name, image}
    })
    res.json(newTours)
})

app.get('/api/tours/:tourID', (req, res) => {
    const {tourID} = req.params
    const singleTour = tours.find((tour) => tour.id === Number(tourID))
    if (!singleTour){
        return res.status(404).send('Tour does not exist')
    }
    return res.json(singleTour)
})

// endpoints with params can get more complex as following
app.get('/api/tours/:tourID/reviews/:reviewID', (req, res) => {
    console.log(req.params)
    res.send('hello world')
})

// endpoints with query parameters
app.get('/api/v1/query', (req, res) => {
    const { search, limit } = req.query
    let sortedTours = [...tours]
    if(search){
        sortedTours = sortedTours.filter((tour) => {
            return tour.name.startsWith(search)
        })
    }
    if(limit){
        sortedTours = sortedTours.slice(0, Number(limit))
    }
    if(sortedTours.length < 1){
        //res.status(404).send('There is no matches with tours')
        return res.status(200).json({ success: true, data: [] })
    }
    res.status(200).json(sortedTours)
})

app.listen(5000, (req, res) => {
    console.log('Server running on port 5000')
})