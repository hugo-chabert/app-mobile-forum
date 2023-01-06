const { Sequelize, DataTypes } = require('sequelize');
// const seq = new Sequelize('mysql::memory:');
const db = require("../config/database");

const Post = db.define('posts', {

    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    // PAS DE CHAMP 'DATE', SEQUELIZE CREE 'createdAt'
    // date: {
    //     type: DataTypes.DATE,
    //     allowNull: false
    // },
    message: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    userID: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
})

module.exports = Post;