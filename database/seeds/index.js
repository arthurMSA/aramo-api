const seeder = require('mongoose-seed');
const env = require('../../config/env')
const data = require('./data')
module.exports = () => {
    seeder.connect(env.URL_MONGO_DB, function() {    
        seeder.loadModels([
            'src/models/Fee.js',
            'src/models/Region.js'
        ])
        seeder.clearModels(['Fee', 'Region'], function() {
            seeder.populateModels(data, function() {
                seeder.disconnect();
            })
        })
    })
}