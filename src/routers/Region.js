module.exports = app => {
    app.post('/region', async (req, res) =>{
        const Region = app.controllers.RegionController
        res.send(await Region.create(req.body))
    })
    app.get('/region', async (req, res) => {
        const Region = app.controllers.RegionController
        res.send(await Region.findAll())
    })
}