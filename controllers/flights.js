const Flight = require('../models/flight')

const newFlight = (req, res) => {
    res.render('flights/new', {title: 'Add Flight'})
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
        res.render('flights/index', { title: 'All Flights', flights })
    })
}

const show = (req, res) => {
    Flight.findById(req.params.id, (err, flight) => {
        res.render('flights/show', { title: 'Flight Details', flight})
    })
}

module.exports = {
    index,
    show,
    create,
    new: newFlight
}