require('dotenv/config')
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const bodyParse = require('body-parser')
const load = require('express-load')

const port = process.env.API_PORT

const app = express()

load('controllers').into(app)

app.use(cors())
app.use(morgan('dev'))
app.use(bodyParse.urlencoded({extended: false}))
app.use(bodyParse.json())
app.listen(port, () => console.log('API RODANDO NA PORTA ', port))


