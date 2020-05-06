const mongoose = require('mongoose')
const FeeSchema = mongoose.Schema({
    price: {
        type: Number,
        required: true
    },
    origin: {
        type: String,
        required: true
    },
    destination: {
        type: String,
        required: true,
    },
})
mongoose.model('Fee', FeeSchema)