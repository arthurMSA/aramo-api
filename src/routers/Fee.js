module.exports = app => {
    app.post('/fee', async (req, res) =>{
        const Fee = app.controllers.FeeController
        res.send(await Fee.create(req.body))
    })
    app.get('/fee', async (req, res) => {
        const Fee = app.controllers.FeeController
        res.send(await Fee.findAll())
    })
}