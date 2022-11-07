const Sequelize = require('sequelize')
const dbCOnfig = require('../config/database')
var requireDirectory = require('require-directory')

const models = requireDirectory(module, '../models')

const connection = new Sequelize(dbCOnfig)

for(const name in models) {
    let model = require('../models/' + name) 
    model.init(connection)
}

module.exports = connection