const jwt = require('jsonwebtoken')

function authenticateToken(req, res, next) {
    const autHeader = req.headers.authorization
    
    const token = autHeader && autHeader.split(' ')[1]

    if(token == null) next({
        statusCode: 401,
        message: "No token found"
    })

    jwt.verify(token, process.env.JWT_TOKEN, (err, user) => {
        if(err) {
            return next(err)
        } 

        req.user = user
        next()
    })
}

module.exports = authenticateToken 