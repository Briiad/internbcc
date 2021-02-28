require('dotenv').config()
const express = require('express')
const app = express()
const session = require('express-session')
const db = require('./models')
const errorHandler = require('./utils/errorHandler')

db.sequelize.sync({ })

app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}))

app.use(express.json())
app.use(express.urlencoded({extended: false}))

const routes = require('./routes')

app.use('/', routes)

app.use(errorHandler)

const PORT = process.env.APP_PORT? process.env.APP_PORT : 4000
app.listen(PORT, () => {
    console.log(`Now running at port ${PORT}`)
})