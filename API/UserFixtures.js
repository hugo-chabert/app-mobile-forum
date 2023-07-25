// user.fixtures.js
const faker = require('faker');

const generateUsers = () => ({
    username: faker.internet.userName(),
    firstname: faker.internet.firstName(),
    lastname: faker.internet.lastName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    role: 'user', // ou utilise faker pour générer des rôles aléatoires
    favorite_anime: 'One piece'
});

const users = Array.from({ length: 20 }, generateUsers); // Crée un tableau de 10 utilisateurs générés aléatoirement

module.exports = {
  users,
};
