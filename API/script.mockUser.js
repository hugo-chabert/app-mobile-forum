// seed.js
const Sequelize = require('sequelize');
const sequelize = require('./src/config/database.js'); // Importe ton instance Sequelize
const { Users } = require('./src/models/UserContext.js'); // Importe ton modèle User
const { users } = require('./UserMock.json'); // Importe les fixtures
const bcrypt = require('bcrypt');


// Définir le modèle "User"
// const UserModel = User.init(sequelize) // Assure-toi que le modèle User est correctement défini dans UserContext.js

const mockData = users;
console.log(Users);
const seedDatabase = async () => {
    try {
        // await sequelize.sync({ force: true }); // Cette ligne peut être dangereuse car elle supprime toutes les données existantes de la base de données. Assure-toi de l'utiliser avec prudence, uniquement pour les besoins de développement et de test.

         // Hacher les mots de passe avant de les insérer dans la base de données
        const hashedMockData = await Promise.all(
        mockData.map(async (user) => {
          const hashedPassword = await bcrypt.hash(user.password, 10); // Le deuxième argument est le "saleround", ici on utilise 10 pour une bonne sécurité
            return { ...user, password: hashedPassword };
            })
        );
        await Users.bulkCreate(hashedMockData);

        console.log('Fixtures successfully inserted into the database.');
    } catch (error) {
        console.error('Error inserting fixtures:', error);
    } finally {
        await sequelize.close();
    }
};

seedDatabase();
