const mongoose = require('mongoose')
// const DATABASE_URL = 'mongodb://localhost/flights'
const DATABASE_URL = 'mongodb+srv://pauladixon:sei@cluster0-dcvfs.mongodb.net/flights?retryWrites=true&w=majority'

mongoose.connect(
    DATABASE_URL, 
    {
        useNewUrlParser: true, 
        useCreateIndex: true, 
        useUnifiedTopology: true
    }
)

mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB')
})
