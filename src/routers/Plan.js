module.exports = app => {
    const router = '/api/plan'
    app.post(router, async (req, res) =>{
        const Plan = app.controllers.PlanController
        res.send(await Plan.create(req.body))
    })
    app.get(router, async (req, res) => {
        const Plan = app.controllers.PlanController 
        res.send(await Plan.findAll())
    })
    app.get(router+'/calculate', async (req, res) => {
        const Plan = app.controllers.PlanController
        res.send(await Plan.calculate(req.query))
    })
}