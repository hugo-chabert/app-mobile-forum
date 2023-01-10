const { Sequelize, DataTypes } = require('sequelize');
// const seq = new Sequelize('mysql::memory:');
const db = require("../config/database");
const Users = require('./UserContext');
const Comments = require('./CommentContext');

const Posts = db.define('posts', {

    id: {
        type: Sequelize.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    titre: {
        type: Sequelize.STRING,
        allowNull: false
    },
    // PAS DE CHAMP 'DATE', SEQUELIZE CREE 'createdAt'
    // date: {
    //     type: DataTypes.DATE,
    //     allowNull: false
    // },
    message: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    id_user: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
})

Posts.belongsTo(Users)
Posts.hasMany(Comments)

module.exports = Posts;