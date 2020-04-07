const mongoose = require('mongoose')
const DATABASE_URL = process.env.DATABASE_URL

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
