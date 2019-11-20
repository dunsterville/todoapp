const { Model, DataTypes } = require('sequelize')
const sequelize = require('../config')

module.exports = {
  Todo: require('')(Model, DataTypes, sequelize)
}