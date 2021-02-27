const router = require('express').Router()
const registerController = require('../controllers/register.controller')
const joiMiddleware = require('../middlewares/joiValidators')

router.post('/', joiMiddleware, registerController.registerUser)

module.exports = router