import { register } from "../services/userApi.js";
import { app } from "../App.js"
const request = require('supertest');
const bcrypt = require('bcrypt')

// const saltRounds = 10; // Nombre de tours de hachage du sel
// const hashedPassword = bcrypt.hashSync(password, saltRounds);

// // Utilisez ensuite le mot de passe haché dans votre code
// password = hashedPassword;
// Reste du code pour enregistrer l'utilisateur
test('Test de la route "/users/register"', async (req, res) => {
    try {
        const saltRounds = 10;
        const hashedPassword = bcrypt.hashSync(password, saltRounds);
        password = hashedPassword;
    

            const response = await request(register)
            .post('/users/register')
            .send({
                // Corps de la requête ici
                username : "ibrahim",
                firstname : "sylla",
                lastname : "ibrahim",
                email : "ibrahim@laplatefo.io",
                password : "Ibra1234444444444*",
                profile_picture : "maPhoto",
                favorite_anime : "onePiece"
            });
        
            // Assertions sur la réponse
            expect(response.status).toBe(201);
            expect(response.body.msg).toBe('Les ressources ont bien été créées');
        } catch (error) {
            // Gestion des erreurs de hachage
            console.error('Erreur de hachage du mot de passe :', error);
            res.status(500).json({ error: 'Erreur de serveur' });
        }
});
  


test('Test de la route "/users/register"', async () => {
    const response = await request(register)
      .post('/users/register')
      .send({
        // Corps de la requête ici
        username : "ibrahim",
        firstname : "sylla",
        lastname : "ibrahim",
        email : "ibrahim@laplatefo.io",
        password : "Ibra1234444444444*",
        profile_picture : "maPhoto",
        favorite_anime : "onePiece"
      });
  
    // Assertions sur la réponse
    expect(response.status).toBe(201);
    expect(response.body.msg).toBe('Les ressources ont bien été créées');
  });