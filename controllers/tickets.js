const Ticket = require('../models/ticket')
const Flight = require('../models/flight')

const newTicket = (req, res) => {
    Ticket.find({}, (err, tickets) => {
        res.render('tickets/new', {
            title: 'Add Ticket',
            tickets
        })
    })
}

const create = (req, res) => {
    Ticket.create(req.body, (err, ticket) => {
        res.redirect('/tickets/new')
    })
}

function addToFlight(req, res) {
    Flight.findById(req.params.id, (err, flight) => {
        flight.tickets.push(req.body.ticketId)
        flight.save((err) => {
            res.redirect(`/flights/${flight._id}`)
        })
    })
}

module.exports = {
    new: newTicket, 
    create, 
    addToFlight
}