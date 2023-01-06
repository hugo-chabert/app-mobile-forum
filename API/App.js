const express = require('express')
const app = express()

const postRouter = require('./routes/commentRouter')
const db = require('./config/database')

const port = 3000

app.use(express.json())
app.use(postRouter)


app.listen(3000, () => {
    console.log('Server is running on port 3000')
})