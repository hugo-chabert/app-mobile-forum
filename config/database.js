const Sequelize = require('sequelize');
const database = new Sequelize(
    'akibatown',
    'root',
    '',
    {
        host: 'localhost',
        dialect: 'mysql'
    }
);

module.exports = database;