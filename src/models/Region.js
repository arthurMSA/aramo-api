const mongoose = require('mongoose')

const RegionSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    ddd: {
        type: String,
        required: true
    }
})

mongoose.model('Region', RegionSchema)