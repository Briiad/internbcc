const bcrypt = require('bcryptjs')

module.exports = (sequelize, Sequelize) => {
    const user = sequelize.define('user', {
        email: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false,
        }, 
        username: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false,

            set(value) {
                this.setDataValue('password', bcrypt.hashSync(value))
            }
        }
    })

    user.prototype.toJSON = function () {
        var values = Object.assign({}, this.get())

        delete values.password
        return values
    }

    return user
}