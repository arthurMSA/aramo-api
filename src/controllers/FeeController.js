const CRUD = require('../interfaces/crud')('Fee')
module.exports = {
    create: async (fee) => {
        try {
            return await CRUD.create(fee)
        } catch (error) {
            console.error(error)
        }
    },
    findAll: async () => {
        try {
            return await CRUD.find({})
        } catch (error) {
            console.error(error)
        }
    }
}