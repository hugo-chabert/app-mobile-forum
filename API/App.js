const express = require('express')
const app = express()
const port = 3000

var usersRouter = require('./router/userRouter');
const db = require('./config/database');
// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })
app.use(express.json())
app.use(usersRouter);

db.sync()
.then((console.log('Connexion database done')))
.catch(error => console.log(error))
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
