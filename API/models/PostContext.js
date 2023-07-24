const { Sequelize, DataTypes } = require('sequelize');
// const seq = new Sequelize('mysql::memory:');
const db = require("../config/database");

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

module.exports = Posts;