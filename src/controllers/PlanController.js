const CRUD = require('../interfaces/crud')('Plan')
module.exports = {
    create: async (plan) => {
        try {
            return await CRUD.create(plan)
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