const express = require('express')
const router = express.Router()
const { createComment, getAllComments, getCommentByID, getAllCommentsByUserID, getAllCommentsByPostID, updateComment, deleteComment } = require('../services/commentApi');

router.post('/comments/create', (req, res) => {
    createComment(req, res);
})

router.get('/comments/all', (req, res) => {
    getAllComments(req, res);
})

router.get('/comments/:id', (req, res) => {
    getCommentByID(req, res);
})

router.get('/comments/user/:userID', (req, res) => {
    getAllCommentsByUserID(req, res);
})

router.get('/comments/post/:postID', (req, res) => {
    getAllCommentsByPostID(req, res);
})

router.put('/comments/update', (req, res) => {
    updateComment(req, res);
})

router.delete('/comments/delete/:id', (req, res) => {
    deleteComment(req, res);
})


module.exports = router;