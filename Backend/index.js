require('dotenv').config()
const express = require('express')
const app = express()
const session = require('express-session')
const db = require('./models')
const jwtMiddleware = require('./middlewares/jwtAuth')
const errorHandler = require('./utils/errorHandler')

db.sequelize.sync({ })

app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}))

app.use(express.json())
app.use(express.urlencoded({extended: false}))

const registerRoutes = require('./routes/register.routes')
const loginRoutes = require('./routes/login.routes')

app.use('/register', registerRoutes)
app.use('/login', loginRoutes)

app.use(errorHandler)

app.get('/dashboard', jwtMiddleware, (req, res) => {
    if (req.session.loggedin) {
        res.send('Welcome back, ' + req.session.username + '!');
    } else {
        res.send('Please login to view this page!');
    }
});

app.use('/', (req, res) => {
    res.send({
        message: "Welcome"
    })
})

const PORT = process.env.APP_PORT? process.env.APP_PORT : 4000
app.listen(PORT, () => {
    console.log(`Now running at port ${PORT}`)
})