const comments = require('../models/CommentContext');

//#region CREATE

function createComment(req, res) {
    const { body } = req
    console.log('BODY ==', body);
    comments.create({...body})
    .then(() => res.send("Commentaire créé!"))
}

//#endregion

//#region READ

function getAllComments(req, res) {
    comments.findAll({
        attributes: { exclude: ['createdAt', 'updatedAt'] }
    })
    .then((comments) => {
        res.json(comments);
    })
}

function getCommentByID(req, res) {
    comments.findByPk(req.params.id, {
        attributes: { exclude: ['createdAt', 'updatedAt'] }
    })
    .then((comments) => {
        res.json(comments);
    })
}

function getAllCommentsByUserID(req, res) {
    comments.findAll({
        where: { id_user: req.params.userID },
        attributes : { exclude: ['createdAt', 'updatedAt' ] }
    })
    .then((comments) => {
        res.json(comments);
    })
}

function getAllCommentsByPostID(req, res) {
    comments.findAll({
        where: { id_post: req.params.postID },
        attributes : { exclude: ['createdAt', 'updatedAt' ] }
    })
    .then((comments) => {
        res.json(comments);
    })
}

//#endregion

//#region UPDATE

function updateComment(req, res) {
    comments.update({
        text: req.params.newText
    }, {
        where: { id: req.params.id }
    })
    .then(() => res.send("Comment updated!"))
}

//#endregion

//#region DELETE

function deleteComment(req, res) {
    comments.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(() => res.send("Comment deleted!"))
}

//#endregion


module.exports = {
    createComment,
    getAllComments,
    getCommentByID,
    getAllCommentsByUserID,
    getAllCommentsByPostID,
    updateComment,
    deleteComment,
};