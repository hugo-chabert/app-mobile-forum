const { Sequelize } = require("sequelize");


const dbInfo = {
    database: 'akibatown',
    username: 'root',
    password: 'root',
    hostname: 'localhost',
    dialect: 'mysql'
};

const db = new Sequelize(
    'akibatown', 
    'root', 
    'root',
    {
        host: 'localhost',
        dialect: 'mysql'
    }
)


db.authenticate()
.then(() => db.sync({ force: false }))
.catch(e => console.error("Unable to connect to database: " + e));

module.exports = db
