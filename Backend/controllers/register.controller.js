const db = require('../models')
const User = db.users

function registerUser(req, res, next) {
    User.create(req.body)
        .then(data => {
            req.session.loggedin = true
            req.session.username = data.username
            res.redirect('/dashboard')
        })
        .catch(err => {
            next(err)
        })
}

module.exports = {
    registerUser
}