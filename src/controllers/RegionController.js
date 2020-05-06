const CRUD = require('../interfaces/crud')('Region')
module.exports = {
    create: async (regions) => {
        try {
            return await CRUD.create(regions)
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