const seeder = require('mongoose-seed');
const env = require('../../config/env')
const data = require('./data')
module.exports = () => {
    console.log('RODANDO SEEDS')
    seeder.connect(env.URL_MONGO_DB, function() {    
        seeder.loadModels([
            'src/models/Fee.js',
            'src/models/Region.js',
            'src/models/Plan.js'
        ])
        seeder.clearModels(['Fee', 'Region', 'Plan'], function() {
            seeder.populateModels(data, function() {
                seeder.disconnect();
            })
        })
    })
}