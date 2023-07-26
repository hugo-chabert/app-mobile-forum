const express = require('express')
const router = express.Router()
const { createPost, getAllPosts, getPostByID, getAllPostsByUserID, getAllPostsByAnime, getPostByTitle, updatePost, deletePost } = require('../services/postApi');

router.post('/posts/create', (req, res) => {
    createPost(req, res);
})

router.get('/posts/all', (req, res) => {
    getAllPosts(req, res);
})

router.get('/posts/all/:anime', (req, res) => {
    getAllPostsByAnime(req, res);
})

router.get('/posts/:id', (req, res) => {
    getPostByID(req, res);
})

router.get('/posts/user/:userID', (req, res) => {
    getAllPostsByUserID(req, res);
})

router.get('/posts/title/:title', (req, res) => {
    getPostByTitle(req, res);
})

router.put('/posts/update', (req, res) => {
    updatePost(req, res);
})

router.delete('/posts/delete/:id', (req, res) => {
    deletePost(req, res);
})


module.exports = router;