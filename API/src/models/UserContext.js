const {Sequelize, DataTypes }= require('sequelize');
const { default: isEmail } = require('validator/lib/isEmail');
const sequelize = require('../config/database');
// const {dataTypes} = sequelize;

const Users = sequelize.define('users', {
    id : {
        type : DataTypes.INTEGER.UNSIGNED,
        primaryKey : true,
        autoIncrement: true,
        allowNull : false,
    },
    username : {
        type : DataTypes.STRING,
        allowNull : false,
        // validate : {
        //     notNull: {
        //         msg: 'Please enter your username'
        //     },
        //     is : {
        //         arg : /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/i,
        //         msg : "le champ username n'est pas valide"
        //     }
        // }
    },
    firstname : {
        type : DataTypes.STRING,
        allowNull : false,
        // validate : {
        //     notNull: {
        //         msg: 'Please enter your firstname'
        //     },
        //     is : {
        //         arg : /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/i,
        //         msg : "le champ firstname n'est pas valide"
        //     }
        // }
    },
    lastname : {
        type : DataTypes.STRING,
        allowNull : false,
        // validate : {
        //     notNull: {
        //         msg: 'Please enter your lastname'
        //     },
        //     is : {
        //         arg : /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/i,
        //         msg : "le champ lastname n'est pas valide"
        //     }
        // }
    },
    email : {
        type : DataTypes.STRING,
        allowNull : false,
        isEmail : true,
        unique: true,
        // validate : {
        //     notNull: {
        //         msg: 'Please enter your email'
        //     },
        //     is : {
        //         arg : /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i,
        //         msg : "le champ email n'est pas valide"
        //     }
        // }
    },
    password : {
        type : DataTypes.STRING,
        allowNull : false,
        // validate : {
        //     notNull: {
        //         msg: 'Please enter your password'
        //     },
        //     is : {
        //         arg : /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/im,
        //         msg : "le champ password n'est pas valide"
        //     }
        // }
    },
    role: {
        type: DataTypes.STRING, // Ou tout autre type de données qui représente les rôles (par exemple, ENUM ou INTEGER)
        allowNull: false,
        defaultValue: 'user', // Définis une valeur par défaut si nécessaire
    },
    favorite_anime : {
        type : DataTypes.STRING,
        allowNull : true
    },
})

module.exports = Users