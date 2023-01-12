const comments = require('../models/CommentContext');

//#region CREATE

function createComment(req, res) {
    const { body } = req
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
        where: { id_user: req.params.id_user },
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
        text: req.body.newText
    }, {
        where: { id: req.body.id }
    })
    .then(() => res.send("Comment updated!"))
}

//#endregion

//#region DELETE

function deleteComment(req, res) {
    comments.destroy({
        where: {
            id: req.body.id
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
    updateComment,
    deleteComment,
};