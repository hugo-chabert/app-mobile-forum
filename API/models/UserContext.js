const sequelize = require('sequelize');
const db = require('../config/database');
// const {dataTypes} = sequelize;

const Users = db.define('users', {
    id : {
        type : sequelize.INTEGER.UNSIGNED,
        primaryKey : true,
        autoIncrement: true,
        allowNull : false
    },
    username : {
        type : sequelize.STRING,
        allowNull : false
    },
    firstname : {
        type : sequelize.STRING,
        allowNull : false
    },
    lastname : {
        type : sequelize.STRING,
        allowNull : false
    },
    email : {
        type : sequelize.STRING,
        allowNull : false
    },
    password : {
        type : sequelize.STRING,
        allowNull : false
    },
    profile_picture : {
        type : sequelize.STRING,
        allowNull : true
    },
    favorite_anime : {
        type : sequelize.STRING,
        allowNull : true
    },
})

module.exports = Users