const express = require('express')
const app = express()
var cors = require('cors')
const port = 3000

var usersRouter = require('./src/router/userRouter');
var postsRouter = require('./src/router/postRouter');
var commentsRouter = require('./src/router/commentRouter');
const sequelize = require('./src/config/database');
// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })
app.use(express.json());
app.use(cors());
app.use(usersRouter);
app.use(postsRouter);
app.use(commentsRouter);

sequelize.sync()
.then((console.log('Connexion database done')))
.catch(error => console.log(error))
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})