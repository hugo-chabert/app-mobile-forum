var express = require('express');
const { getAll, getOne, createOne, updateOne, deleteOne } = require( '../services/userApi');
 router = express.Router();

var app = express()

router.get("/getAll", getAll);

router.get("/getOne/:id", getOne);

router.post("/createOne", createOne);

router.put("/updateOne/:id", updateOne);

router.delete("/deleteOne/:id", deleteOne);

module.exports = router;