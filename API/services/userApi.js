const Users = require('../models/UserContext')
const userValidation = require('../utils/usersValidation')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
require('dotenv').config();

function getAll(req, res) {
    Users.findAll({
        attributes: { exclude: ['createdAt', 'updatedAt'] }
    })
    .then((users) => {
        res.json(users);
    })
    .catch(error => res .status(500).json(error))
}

function getOne(req, res) {
    Users.findByPk(req.params.id, {
        attributes: { exclude: ['createdAt', 'updatedAt'] }
    })
    .then((users) => {
        res.json(users);
    })
    .catch(error => res .status(500).json(error))
}

function createOne(req, res) {
    const { body } = req
    const { error } = userValidation(body)
    if (error) return res.status(401).json(error.details[0].message)

    body.password = bcrypt.hashSync(body.password, 10)

    Users.create({ ...body })
    .then(() => {
        res.status(201).json({ msg: "Les ressources ont bien été créées" })
    })
    .catch(error => res.status(500).json(error))
}

function updateOne(req, res){
    const { error } = userValidation(body)
    if (error) return res.status(401).json(error.details[0].message)
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

function deleteOne(req, res){
    Users.destroy({
        where: { id: req.body.id }
    })
    .then((data) => {
        if(data == 0) return res.status(404).json({msg : "Not Found"})
        res.send("User deleted!")
    })
    .catch(error => res .status(500).json(error))
}

function login(req, res) {
    const { body } = req
    const { error } = userValidation(body)
    if (error) return res.status(401).json(error.details[0].message)
    Users.findOne({ where: { email: body.email } })
    .then(users => {
        if (!users) res.status(400).json({
            success: 0,
            data: "Invalid email or password"
        });
        const result = bcrypt.compareSync(body.password, users.password);
        if (result) {
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
}


module.exports = {getAll, getOne, createOne, updateOne, deleteOne, login}