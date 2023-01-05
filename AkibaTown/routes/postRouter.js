const express = require('express')
const app = express.Router()
const port = 3000;

const { 
    createPost, 
    getAllPosts, 
    getPostByID, 
    getAllPostsByUserID,
    getPostByTitle,
    updatePost,
    deletePost
} = require('../services/postApi');



app.post('/', (req, res) => {
    createPost(req, res);
})


app.get('/all', (req, res) => {
    getAllPosts(req, res);
})

app.get('/{id}', (req, res) => {
    getPostByID(req, res);
})

app.get('/all?userID={userID}', (req, res) => {
    getAllPostsByUserID(req, res);
})

app.get('/all?title={title}', (req, res) => {
    getPostByTitle(req, res);
})


app.put('/{id}', (req, res) => {
    updatePost(req, res);
})


app.delete('/{id}', (req, res) => {
    deletePost(req, res);
})


app.listen(port);

module.exports = app;