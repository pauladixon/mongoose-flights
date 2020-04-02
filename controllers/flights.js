const Flight = require('../models/flight')

const newFlight = (req, res) => {
    res.render('flights/new')
}

const create = (req, res) => {
    for (let key in req.body) {
        if (req.body[key] === '') delete req.body[key]
    }
    const flight = new Flight(req.body)
    flight.save(function(err) {
        if (err)
            return res.render('flights/new')
        else {
            console.log(flight)
            res.redirect('/flights')
        }
    })
}

const index = (req, res) => {
    Flight.find({}, (err, flights) => {
        res.render('flights/index', { flights })
    })
}

module.exports = {
    index,
    new: newFlight,
    create
}