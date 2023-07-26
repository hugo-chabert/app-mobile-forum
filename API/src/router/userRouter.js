const express = require('express');
const router = express.Router();
const { getAll, getOne, register, updateOne, deleteOne, login } = require( '../services/userApi');
const authenticateJWT = require('../utils/authenticateJWT');

router.post("/users/register", (req, res) => {
    register(req, res);
});

router.get("/users/all", authenticateJWT, (req, res) => {
    getAll(req, res);
});

router.get("/users/:id", (req, res) => {
    getOne(req, res);
});

router.put("/users/update/:id", (req, res) => {
    updateOne(req, res);
});

router.delete("/users/delete/:id", (req, res) => {
    deleteOne(req, res);
});

router.post("/users/login", (req, res) => {
    login(req, res);
});


module.exports = router;