module.exports = app => {
    app.post('/plan', async (req, res) =>{
        const Plan = app.controllers.PlanController
        res.send(await Plan.create(req.body))
    })
    app.get('/plan', async (req, res) => {
        const Plan = app.controllers.PlanController
        res.send(await Plan.findAll())
    })
}