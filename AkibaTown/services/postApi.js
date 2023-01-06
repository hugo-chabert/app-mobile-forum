const posts = require('../../API/context/post');

//#region CREATE

function createPost(req, res) {
    posts.create({
        title: req.body.title,
        message: req.body.message,
        userID: req.body.userID
    })
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
            where: { userID: req.params.userID },
            attributes : { exclude: ['createdAt', 'updatedAt' ] }
        })
    )
}

function getPostByTitle(req, res) {
    res.send(
        posts.findAll({
            where: { title: req.params.title },
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
            title: req.body.newTitle,
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