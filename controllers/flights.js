const Flight = require('../models/flight')

module.exports = {
    index,
    show,
    new: newFlight,
    create, 
    // delete: deleteFlight
}

function index(req, res) {
    Flight.find({}, function(err, flights) {
      res.render('flights/index', { title: 'All Flights', flights })
    })
  }

function show(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
      res.render('flights/show', { title: 'Flight Details', flight })
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
    // one way to handle errors
    if (err) return res.redirect('/flights/new')
    console.log(flight)
    // for now, redirect right back to new.ejs
    res.redirect('/flights')
  })
}

// function deleteFlight (req, res) {
//     Flight.deleteOne(req.params.id)
//     res.redirect('/flights')
// }