const CRUD = require('../interfaces/crud')('Region')
module.exports = {
    create: async (fee) => {
        return await CRUD.create(fee)
    },
    findAll: async () => {
        return await CRUD.findAll('name')
    },
    find: async(obj) => {
        return await CRUD.find(obj)
    }
}