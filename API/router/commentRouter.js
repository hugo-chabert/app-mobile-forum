const express = require('express')
const router = express.Router()
const { createComment, getAllComments, getCommentByID, getAllCommentsByUserID, updateComment, deleteComment } = require('../services/commentApi');

router.post('/comments/', (req, res) => {
    createComment(req, res);
})

router.get('/comments/all', (req, res) => {
    getAllComments(req, res);
})

router.get('/comments/all?id={id}', (req, res) => {
    getCommentByID(req, res);
})

router.get('/comments/all?userID={userID}', (req, res) => {
    getAllCommentsByUserID(req, res);
})

router.put('/comments/update', (req, res) => {
    updateComment(req, res);
})

router.delete('/comments/delete', (req, res) => {
    deleteComment(req, res);
})


module.exports = router;