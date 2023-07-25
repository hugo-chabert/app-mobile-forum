const express = require('express')
const app = express()
var cors = require('cors')
const port = 3000

var usersRouter = require('./src/router/userRouter');
var postsRouter = require('./src/router/postRouter');
var commentsRouter = require('./src/router/commentRouter');
const sequelize = require('./src/config/database');
const bcrypt = require('bcrypt')
const { users } = require('./UserMock.json'); // Importe les fixtures
const { posts } = require('./PostMock.json')
const User = require('./src/models/UserContext.js'); // Importe ton modèle User
const Posts = require('./src/models/PostContext')
// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })
app.use(express.json());
app.use(cors());
app.use(usersRouter);
app.use(postsRouter);
app.use(commentsRouter);

const UserModel = sequelize.models.users
const PostModel = sequelize.models.posts
sequelize.sync() // ajouté { force: true } pour pouvoir creer de nouveau mock
    .then(() => {
        users.map((user) => {
            const hashedPassword = bcrypt.hashSync(user.password, 10); // Le deuxième argument est le "salt rounds"
            user.password = hashedPassword;
            UserModel.create(user);
        })
        console.log('Connexion database nickel. user created')

        posts.map((post) => {
            PostModel.create(post);
        })
        console.log('Connexion database nickel. posts created')
    })
    .catch('errorr')
const server = app.listen(port, () => {
    // console.log(`Example app listening on port ${port}`)
})
module.exports = server