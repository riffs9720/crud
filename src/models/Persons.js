const { Model, DataTypes } = require('sequelize')

class persons extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
            phone: DataTypes.STRING,
        }, {
            sequelize
        })
    }
}

module.exports = persons