module.exports = app => {
    const router = 'api/region'
    app.post(router, async (req, res) =>{
        const Region = app.controllers.RegionController
        res.send(await Region.create(req.body))
    })
    app.get(router, async (req, res) => {
        const Region = app.controllers.RegionController
        if(req.params) {
            res.send(await Region.find(req.query))
        } else {
            res.send(await Region.findAll())
        }
    })
}