const Ticket = require('../models/ticket')
const Flight = require('../models/flight')

const newTicket = (req, res) => {
    Flight.findById(req.params.id, (err, flight) => {
        res.render('tickets/new', {
            title: 'Add Ticket',
            flight
        })
    })
}

const create = (req, res) => {
    flightId = req.params.id
    req.body.flight = flightId
    Ticket.create(req.body, (err, ticket) => {
        res.redirect(`/flights/${flightId}`)
    })
}

module.exports = {
    new: newTicket, 
    create
}