const sequelize = require('sequelize');
const { default: isEmail } = require('validator/lib/isEmail');
const db = require('../config/database');
// const {dataTypes} = sequelize;

const Users = db.define('users', {
    id : {
        type : sequelize.INTEGER.UNSIGNED,
        primaryKey : true,
        autoIncrement: true,
        allowNull : false,
    },
    username : {
        type : sequelize.STRING,
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
        type : sequelize.STRING,
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
        type : sequelize.STRING,
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
        type : sequelize.STRING,
        allowNull : false,
        isEmail : true,
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
        type : sequelize.STRING,
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