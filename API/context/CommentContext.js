const { Sequelize, DataTypes } = require('sequelize');
const db = require("../config/database");
const Posts = require('./PostContext');
const Users = require('./UserContext');

const Comments = db.define('comments', {

    id: {
        type: Sequelize.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    text: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    id_user: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    id_post: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
})

Comments.belongsTo(Posts)
Comments.belongsTo(Users)

module.exports = Comments;