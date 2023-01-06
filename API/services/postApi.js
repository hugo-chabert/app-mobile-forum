const posts = require('../context/PostContext');
const { post } = require('../routes/postRouter');

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
        attributes: { exclude: ['createdAt', 'updatedAt'] }
    })
    .then((posts) => {
        res.json(posts);
    })
}

function getAllPostsByUserID(req, res) {
    posts.findAll({
        where: { id_user: req.params.id_user },
        attributes : { exclude: ['createdAt', 'updatedAt' ] }
    })
    .then((posts) => {
        res.json(posts);
    })
}

function getPostByTitle(req, res) {
    posts.findAll({
        where: { titre: req.params.titre },
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
        titre: req.body.newTitre,
        message: req.body.newMessage
    }, {
        where: { id: req.body.id },
        omitNull: true
    })
    .then(() => res.send("Post updated!"))
}

//#endregion

//#region DELETE

function deletePost(req, res) {
    posts.destroy({
        where: {
            id: req.body.id
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
    updatePost,
    deletePost,
};