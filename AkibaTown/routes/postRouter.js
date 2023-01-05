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



app.post('/posts/', (req, res) => {
    createPost(req, res);
})


app.get('/posts/all', (req, res) => {
    getAllPosts(req, res);
})

app.get('/posts/{id}', (req, res) => {
    getPostByID(req, res);
})

app.get('/posts/all?userID={userID}', (req, res) => {
    getAllPostsByUserID(req, res);
})

app.get('/posts/all?title={title}', (req, res) => {
    getPostByTitle(req, res);
})


app.put('/posts/{id}', (req, res) => {
    updatePost(req, res);
})


app.delete('/posts/{id}', (req, res) => {
    deletePost(req, res);
})


app.listen(port);

module.exports = app;