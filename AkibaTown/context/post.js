const { Sequelize, DataTypes } = require("sequelize/types");
const seq = new Sequelize('mysql::memory:');

const Post = seq.define('posts', {

    id: {
        type: DataTypes.INTEGER,
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