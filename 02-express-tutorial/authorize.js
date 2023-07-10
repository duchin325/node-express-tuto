const authorize = (req, res, next) => {
    const {user} = req.query
    if ( user === 'rodri'){
        req.user = { name: 'rodri', id: 4}
        next()
    } else{
        res.status(401).send('Unauthorize')
    }
}

module.exports = authorize