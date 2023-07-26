const posts = require('../models/PostContext');
const { post } = require('../router/postRouter');

//#region CREATE

function createPost(req, res) {
    const { body } = req
    posts.create({...body})
    .then(() => res.send("Post créé!"))
}

//#endregion

//#region READ

function getAllPosts(req, res) {
    posts.findAll({
        attributes: { exclude: ['createdAt', 'updatedAt'] }
    })
    .then((posts) => {
        res.json(posts);
    })
}

function getPostByID(req, res) {
    posts.findByPk(req.params.id, {
        attributes: { exclude: ['createdAt', 'updatedAt'] },
    })
    .then((posts) => {
        res.json(posts);
    })
}

function getAllPostsByUserID(req, res) {
    posts.findAll({
        where: { id_user: req.params.userID },
        attributes : { exclude: ['createdAt', 'updatedAt' ] }
    })
    .then((posts) => {
        res.json(posts);
    })
}

function getAllPostsByAnime(req, res) {
    posts.findAll({
        where: { selected_anime: req.params.anime },
        attributes: { exclude: ['createdAt', 'updatedAt'] }
    })
    .then((posts) => {
        res.json(posts);
    })
}

function getPostByTitle(req, res) {
    posts.findAll({
        where: { titre: req.params.title },
        attributes : { exclude: ['createdAt', 'updatedAt' ] }
    })
    .then((posts) => {
        res.json(posts);
    })
}

//#endregion

//#region UPDATE

function updatePost(req, res) {
    posts.update({
        titre: req.params.newTitre,
        message: req.params.newMessage
    }, {
        where: { id: req.params.id },
        omitNull: true
    })
    .then(() => res.send("Post updated!"))
}

//#endregion

//#region DELETE

function deletePost(req, res) {
    posts.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(() => res.send("Post deleted!"))
}

//#endregion


module.exports = {
    createPost,
    getAllPosts,
    getPostByID,
    getAllPostsByUserID,
    getPostByTitle,
    getAllPostsByAnime,
    updatePost,
    deletePost,
};