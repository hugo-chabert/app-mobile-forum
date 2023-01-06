const express = require('express')
const router = express.Router()
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



router.post('/posts/', (req, res) => {
    createPost(req, res);
})


router.get('/posts/all', (req, res) => {
    getAllPosts(req, res);
})

router.get('/posts/{id}', (req, res) => {
    getPostByID(req, res);
})

router.get('/posts/all?userID={userID}', (req, res) => {
    getAllPostsByUserID(req, res);
})

router.get('/posts/all?title={title}', (req, res) => {
    getPostByTitle(req, res);
})


router.put('/posts/{id}', (req, res) => {
    updatePost(req, res);
})


router.delete('/posts/{id}', (req, res) => {
    deletePost(req, res);
})


module.exports = router;