const mongoose = require('mongoose')
module.exports = (nameModel) => {
    require(`../models/${nameModel}`)
    const Model = mongoose.model(nameModel)
    return {
        create: async (regions) => {
            try {
                return await Model.create(regions)
            } catch (error) {
                console.error(error)
            }
        },
        findAll: async () => {
            try {
                return await Model.find({})
            } catch (error) {
                console.error(error)
            }
        },
        find: async (obj) => {
            try {
                return await Model.find(obj)
            } catch (error) {
                console.error(error)
            }
        },
        delete: async (obj) => {
            try {
                return await Model.remove(obj)
            } catch (error) {
                console.error(error)
            }
        }
    }
}