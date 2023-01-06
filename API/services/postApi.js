const posts = require('../context/PostContext');

//#region CREATE

function createPost(req, res) {
    const { body } = req
    posts.create({...body})
    .then(() => res.send("Post créé!"))
}

//#endregion

//#region READ

function getAllPosts(req, res) {
    res.send(
        posts.findAll({
            attributes: { exclude: ['createdAt', 'updatedAt'] }
        })
    )
}

function getPostByID(req, res) {
    res.send(
        posts.findByPk(req.params.id, {
            attributes: { exclude: ['createdAt', 'updatedAt'] }
        })
    )
}

function getAllPostsByUserID(req, res) {
    res.send(
        posts.findAll({
            where: { id_user: req.params.id_user },
            attributes : { exclude: ['createdAt', 'updatedAt' ] }
        })
    )
}

function getPostByTitle(req, res) {
    res.send(
        posts.findAll({
            where: { titre: req.params.titre },
            attributes : { exclude: ['createdAt', 'updatedAt' ] }
        })
    )
}

//#endregion

//#region UPDATE

function updatePost(req, res) {
    posts.findByPk(req.params.id)
    .then(p => {
        p.update({
            titre: req.body.newTitre,
            message: req.body.newMessage
        })
    })
}

//#endregion

//#region DELETE

function deletePost(req, res) {
    posts.destroy({
        where: {
            id: req.params.id
        }
    })
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