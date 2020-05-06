const mongoose = require('mongoose')

const RegionSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    ddd: {
        type: Number,
        required: true
    }
})

mongoose.model('Region', RegionSchema)