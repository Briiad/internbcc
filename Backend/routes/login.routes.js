const router = require('express').Router()
const loginController = require('../controllers/login.controller')
const joiMiddleware = require('../middlewares/joiValidators')

router.post('/', joiMiddleware, loginController.loginUser)

module.exports = router