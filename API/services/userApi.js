const Users = require('../context/UserContext')
const userValidation = require('../utils/usersValidation')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
require('dotenv').config();

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

    body.password = bcrypt.hashSync(body.password, 10)

    Users.create({ ... body})
    .then(() => {
        res.status(201).json({msg : "Les ressources ont bien était créer"})
    })
    .catch(error => res .status(500).json(error))
};

// const updateOne = (req, res) => {
//     const {id} = req.params
//     const {body} = req;

//     Users.findByPk(id)
//     .then(users => {
//         if(!users) return res.status(404).json({msg : "Not found"})
//         users.username = body.username
//         users.firstname = body.firstname
//         users.lastname = body.lastname
//         users.email = body.email
//         users.password = body.password
//         users.profile_picture = body.profile_picture
//         users.favorite_anime = body.favorite_anime
//         users.save()
//         .then(() => res.status(201).json({msg : "ressources modifier avec succés"}))
//         .catch(error => res .status(500).json(error))
//     })
//     .catch(error => res .status(500).json(error))
// }

function updateOne(req, res){
    Users.update({
        username: req.body.username,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        password: req.body.password,
        profile_picture: req.body.profile_picture,
        favorite_anime: req.body.favorite_anime,
    }, {
        where: { id: req.body.id },
        omitNull: true
    })
    .then(() => res.send("User updated!"))
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

const login = (req, res) => {
    // const [user, created] = await User.findOrCreate({
    //     where: { username: 'sdepold' },
    //     defaults: {
    //       job: 'Technical Lead JavaScript'
    //     }
    const {body} = req;
    Users.findOne({where : {email : body.email}})
        .then(users => {
            console.log("aaaa")
            if(!users) res.status(400).json({
                success: 0,
                data: "Invalid email or password"});
                console.log("pas user")
            // res.status(200).json(users)
            const result = bcrypt.compareSync(body.password, users.password);
            console.log("coucou")
            if (result) {
                console.log("user présent")
                users.password = undefined;
                const jsontoken = jwt.sign({ result: users }, process.env.JWT_KEY, {
                    expiresIn: "1h"
                });
                res.status(200).json({
                    success: 1,
                    message: "login successfully",
                    token: jsontoken
                });
            } else {
                res.status(400).json({
                    success: 0,
                    data: "Invalid email or password"
                });
            }
        })
        .catch(error => {
            console.log(error);
            res.status(500).json(error)
        })
  };

module.exports = {getAll, getOne, createOne, updateOne, deleteOne, login}