// on importe les modules nécessaires pour le test
import axios from "axios"
// on importe la methode request de supertest
import request from "supertest";
// on importe notre serveur
import server from "../App";

// on importe notre modele User
const { Users } = require('../src/models/UserContext.js');
// on importe les config de Sequelize
const sequelize = require('../src/config/database.js');


const UserModel = sequelize.models.users

// Augmenter le délai d'attente pour chaque test
jest.setTimeout(10000);

// Test unitaire pour la route DELETE /users/delete/:id
describe('/users/delete/:id', () => {
    it('should delete a user and return "User deleted!"', async () => {

    // on fait une requête DELETE à l'API pour supprimer l'utilisateur de test
    const response = await request(server).delete(`/users/delete/12`);

    // on vérifie le statut de la réponse (200 OK dans ce cas)
    expect(response.status).toBe(200);

    // on vérifie le contenu de la réponse
    expect(response.text).toBe('User deleted!');
  });

// it('should return 404 if the user does not exist', async () => {
//     // Fait une requête DELETE à l'API pour supprimer un utilisateur inexistant (ID invalide)
//     const response = await request(server).delete('http://localhost:3000/users/delete/12345');

//     // Vérifie le statut de la réponse (404 Not Found dans ce cas)
//     expect(response.status).toBe(404);

//     // Vérifie le contenu de la réponse
//     expect(response.body).toEqual({ msg: 'Not Found' });
//   });
});
