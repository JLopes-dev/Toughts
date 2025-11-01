const conn = require('../db/conn');
const { DataTypes } = require('sequelize');

const Tought = conn.define('Tought', {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
        require: true
    }
})

module.exports = Tought;