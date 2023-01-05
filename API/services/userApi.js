const Users = require('../context/UserContext')
const userValidation = require('../utils/usersValidation')
const getAll = (req, res) => {
    Users.findAll({
        attributes : {exclude : ["createdAt", "updatedAt"]}
    })
    .then(users => {
        res.status(200).json(users)
    })
    .catch(error => res .status(500).json(error))
};

const getOne = (req, res) => {
    const {id} = req.params
    Users.findByPk(id, {
        attributes : {exclude : ["createdAt", "updatedAt"]}
    })
    .then(users => {
        if(!users) return res.status(404).json({msg : "Not found"})
        res.status(200).json(users)
    })
    .catch(error => res.status(500).json(error))
};

const createOne = (req, res) => {
    const {body} = req
    const {error} = userValidation(body)
    if (error) return res.status(401).json(error.details[0].message)

    Users.create({ ... body})
    .then(() => {
        res.status(201).json({msg : "Les ressources ont bien était créer"})
    })
    .catch(error => res .status(500).json(error))
};

const updateOne = (req, res) => {
    const {id} = req.params
    const {body} = req;

    Users.findByPk(id)
    .then(users => {
        if(!users) return res.status(404).json({msg : "Not found"})
        users.username = body.username
        // users.firstname = body.firstname
        // users.lastname = body.lastname
        // users.email = body.email
        // users.password = body.password
        // users.profile_picture = body.profile_picture
        // users.favorite_anime = body.favorite_anime
        users.save()
        .then(() => res.status(201).json({msg : "ressources modifier avec succés"}))
        .catch(error => res .status(500).json(error))
    })
    .catch(error => res .status(500).json(error))
}
const deleteOne = (req, res) => {
    const {id} = req.params
    Users.destroy({where : {id :id }})
    .then(data => {
        if(data == 0) return res.status(404).json({msg : "Not Found"})
        res.status(200).json({msg : "Deleted Ressource"})
    })
    .catch(error => res .status(500).json(error))
}

module.exports = {getAll, getOne, createOne, updateOne, deleteOne}