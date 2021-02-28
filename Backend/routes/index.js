const app = require('express').Router()
const loginController = require('../controllers/login.controller')
const registerController = require('../controllers/register.controller')
const joiMiddleware = require('../middlewares/joiValidators')
const jwtMiddleware = require('../middlewares/jwtAuth')

app.post('/register', joiMiddleware, registerController.registerUser)

app.post('/login', joiMiddleware, loginController.loginUser)

app.get('/dashboard', jwtMiddleware, (req, res) => {
    if (req.session.loggedin) {
        res.send('Welcome back, ' + req.session.username + '!');
    } else {
        res.send('Please login to view this page!');
    }
})

app.use('/', (req, res) => {
    res.send({message: 'Welcome'})
})

module.exports = app