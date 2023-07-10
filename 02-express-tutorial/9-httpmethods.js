const express = require('express')
const app = express()
let {people} = require('./data')

//parse form data
app.use(express.urlencoded({ extended: false }))
//parse json
app.use(express.json())

//HTTP methods
//GET
app.get('/api/people', (req, res) => {
    res.status(200).json( { success: true, data: people })
})
//POST
app.post('/api/people', (req, res) => {
    const {name} = req.body
    if(!name){
        res.status(400).json({success: false, msg: 'please provide a name value'})
    }
    res.status(200).json( {success: true, person: name})
})
app.post('/api/postman/people', (req, res) => {
    const { name } = req.body;
    if(!name){
        res.status(400).json({ success: false, msg: 'please provide name value'})
    }
    res.status(200).json({ success: true, people: [...people, name]})
})
//PUT
app.put('/api/people/:id', (req, res) => {
    const {id} = req.params
    const {name} = req.body
    const person = people.find((person) => person.id === Number(id))
    if(!person){
        res.status(400).json({ success: false, msg: `no person with id ${id}`})
    }
    const newPerson = people.map((person) => {
        if(person.id === Number(id)){
            person.name = name
        }
        return person
    })
    res.status(200).json({ success: true, data: newPerson})
})
//DELETE
app.delete('/api/people/:id', (req, res) => {
    const {id} = req.params
    const person = people.map((person) => person.id === Number(id) )
    if(!person){
       return res.status(400).json({ success: false, msg: `no person with the id ${id}`})
    }
    const newPeople = people.filter((person) => person.id !== Number(id))
    return res.status(200).json({ success: true, data: newPeople })
})







app.listen(5000, () => {
    console.log('Server running on port 5000...')
})