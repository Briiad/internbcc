const db = require('../models')
const User = db.users;

function registerUser(req, res, next) {
    User.create(req.body)
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            next(err)
        })
}

module.exports = {
    registerUser
}