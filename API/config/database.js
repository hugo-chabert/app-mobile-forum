const { Sequelize } = require("sequelize");

const dbInfo = {
    database: 'akibatown',
    username: 'root',
    password: '',
    hostname: 'localhost',
    dialect: 'mysql'
};

const db = new Sequelize(
    dbInfo.database, 
    dbInfo.username, 
    dbInfo.password,
    {
        host: dbInfo.hostname,
        dialect: dbInfo.dialect
    }
);

try {
    db.authenticate();
    console.log("Successfully connected!");
}
catch(e) {
    console.error("Unable to connect to database: " + e);
}


module.exports = db;