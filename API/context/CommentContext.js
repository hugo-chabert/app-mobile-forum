const { Sequelize, DataTypes } = require('sequelize');
const db = require("../config/database");

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

module.exports = Comments;