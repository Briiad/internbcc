require('dotenv').config()
const express = require('express')
const app = express()
const db = require('./models')
const errorHandler = require('./utils/errorHandler')

db.sequelize.sync({ })

app.use(express.json())
app.use(express.urlencoded({extended: false}))

const registerRoutes = require('./routes/register.routes')

app.use('/register', registerRoutes)

app.use(errorHandler)

app.use('/', (req, res) => {
    res.send({
        message: "Welcome"
    })
})

const PORT = process.env.APP_PORT? process.env.APP_PORT : 4000
app.listen(PORT, () => {
    console.log(`Now running at port ${PORT}`)
})