const Sequelize = require('sequelize');
<<<<<<< Updated upstream:API/src/config/database.js
require('dotenv').config();
=======
require('dotenv').config()
>>>>>>> Stashed changes:API/config/database.js

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        dialect: process.env.DB_DIALECT
    }
)

sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
}).catch((error) => {
    console.error('Unable to connect to the database: ', error);
});
module.exports = sequelize;