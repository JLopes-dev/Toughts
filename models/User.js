const conn = require('../db/conn');
const { DataTypes } = require('sequelize');
const Tought = require('./Tought')

const User = conn.define('User', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        require: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        require: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        require: true
    }
});

Tought.belongsTo(User);
User.hasMany(Tought);

module.exports = User;