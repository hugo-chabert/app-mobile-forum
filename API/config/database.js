const Sequelize = require('sequelize');
const sequelize = new Sequelize(
    'akibatown',
    'root',
    'root',
    {
        host: 'localhost',
        dialect: 'mysql'
    }
)

sequelize.authenticate().then(() => {

    // DECOMMENTER CA POUR AJOUTER LA TABLE, PUIS LANCEZ NODEMON
    //
    // try {
    //     sequelize.query('ALTER TABLE posts ADD COLUMN selected_anime TEXT;')
    //     console.log("Table updated successfully: added 'selected_anime' column to table 'posts'.")
    // }
    // catch(err) {
    //     console.error(err)
    // }

    console.log('Connection has been established successfully.');
 }).catch((error) => {
    console.error('Unable to connect to the database: ', error);
 });
module.exports = sequelize;