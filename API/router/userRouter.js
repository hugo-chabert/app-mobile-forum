const express = require('express');
const router = express.Router();
const { getAll, getOne, createOne, updateOne, deleteOne, login } = require( '../services/userApi');
const authenticateJWT = require('../utils/authenticateJWT');

router.post("/users/create", (req, res) => {
    createOne(req, res);
});

router.get("/users/all", authenticateJWT, (req, res) => {
    getAll(req, res);
});

router.get("/users/all/?id={id}", (req, res) => {
    getOne(req, res);
});

router.put("/users/update/?id={id}", (req, res) => {
    updateOne(req, res);
});

router.delete("/users/delete/?id={id}", (req, res) => {
    deleteOne(req, res);
});

router.post("/users/login", (req, res) => {
    login(req, res);
});


module.exports = router;