const CRUD = require('../interfaces/crud')('Plan')
const Fee = require('./FeeController')
module.exports = {
    create: async (fee) => {
        return await CRUD.create(fee)
    },
    findAll: async () => {
        return await CRUD.findAll()
    },
    find: async(obj) => {
        return await CRUD.find(obj)
    },
    calculate: async({origin, destination, time}) => {
        const feeData = await Fee.find({origin, destination})
        const plans = await CRUD.findAll()
        let values = []
        if(feeData.length === 1) {
            let feePrice = feeData[0]['price']
            plans.forEach(plan => {
                let differenceTime = time - plan['time']
                let withPlan = 0 
                if(differenceTime > 0) {
                    let normalFee = differenceTime*feePrice
                    withPlan = normalFee+(normalFee*(plan['rateException']/100))
                }
                values.push({
                    name: plan['name'],
                    withPlan,
                    withoutPlan: time*feePrice 
                })
            })
          }
          return values
        }
    }