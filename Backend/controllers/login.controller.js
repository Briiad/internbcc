const db = require('../models')
const User = db.users
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

function loginUser(req, res, next) {
    if(req.body.username) {
        User.findOne({
            where: {
                username: req.body.username, 
            }
        })
            .then(data => {
                if(bcrypt.compareSync(req.body.password, data.password)) {
                    let payload = {
                        id: data.id,
                        username: data.username,
                    }
                    const token = jwt.sign(payload, process.env.JWT_TOKEN)
                    req.session.loggedin = true
                    req.session.username = req.body.username
                    res.redirect('/dashboard')
                } else {
                    res.send({message: 'wrong password'})
                }
            })
            .catch(err => {
                res.send({
                    message: 'no account with that username'
                })
            }
            )
    } else {
        res.send('Please enter Username and Password!');
    }
}

module.exports = {
    loginUser
}
