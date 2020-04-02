const mongoose = require('mongoose')

const flightSchema = new mongoose.Schema({
    airline: {
        type: String,
        enum: ['American', 'Southwest', 'United'],
    }, 
    airport: {
        type: String,
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
        default: 'DEN'
    }, 
    flightNo: {
        type: Number,
        range: {
            min: 10,
            max: 9999
        }
    },
    departs: {
        type: Date,
        default: () => {
            const date = new Date()
            date.setFullYear(date + 1)
            return date
        }
    }
})

module.exports = mongoose.model('Flight', flightSchema)