const express = require('express')
const router = express.Router()
const { createPost, getAllPosts, getPostByID, getAllPostsByUserID, getPostByTitle, updatePost, deletePost } = require('../services/postApi');

router.post('/posts/create', (req, res) => {
    createPost(req, res);
})

router.get('/posts/all', (req, res) => {
    getAllPosts(req, res);
})

router.get('/posts/all?id={id}', (req, res) => {
    getPostByID(req, res);
})

router.get('/posts/all?userID={userID}', (req, res) => {
    getAllPostsByUserID(req, res);
})

router.get('/posts/all?title={title}', (req, res) => {
    getPostByTitle(req, res);
})

router.put('/posts/update', (req, res) => {
    updatePost(req, res);
})

router.delete('/posts/delete', (req, res) => {
    deletePost(req, res);
})


module.exports = router;