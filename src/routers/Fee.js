module.exports = app => {
    const router = '/api/fee'
    app.post(router, async (req, res) =>{
        const Fee = app.controllers.FeeController
        res.send(await Fee.create(req.body))
    })
    app.get(router, async (req, res) => {
        const Fee = app.controllers.FeeController
        if(req.params) {
            res.send(await Fee.find(req.query))
        } else {
            res.send(await Fee.findAll())
        }
        
    })
}