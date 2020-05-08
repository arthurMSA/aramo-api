module.exports = app => {
    const router = '/api/region'
    app.post(router, async (req, res) =>{
        const Region = app.controllers.RegionController
        res.send(await Region.create(req.body))
    })
    app.get(router, async (req, res) => {
        const Region = app.controllers.RegionController
        res.send(await Region.findAll())

    })
}