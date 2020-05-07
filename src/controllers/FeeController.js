const CRUD = require('../interfaces/crud')('Fee')
module.exports = {
    create: async (fee) => {
        return await CRUD.create(fee)
    },
    findAll: async () => {
        return await CRUD.findAll()
    },
    find: async(obj) => {
        return await CRUD.find(obj)
    }
}