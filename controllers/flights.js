const Flight = require('../models/flight')
const Ticket = require('../models/ticket')

function index(req, res) {
    Flight.find({}, function(err, flights) {
      res.render('flights/index', { title: 'All Flights', flights })
    })
  }

function show(req, res) {
    Flight.findById(req.params.id)
    .populate('tix').exec((err, flight) => {
      Ticket.find({flight: flight._id}, (err, tickets) => {
      res.render('flights/show', { 
        title: 'Flight Details', flight, tickets
      })
    })
  })
}

function newFlight(req, res) {
    newFlight = new Flight();
    res.render('flights/new', { title: 'Add Flight' })
  }

function create(req, res) {
  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key]
  }
  const flight = new Flight(req.body)
  flight.save(function(err) {
    if (err) return res.redirect('/flights/new')
    console.log(flight)
    res.redirect(`/flights/${flight._id}`)
  })
}


module.exports = {
  index,
  show,
  new: newFlight,
  create, 
}