const express= require("express");
const router = express.Router();
const Client = require('../../app/controller/ClientController');
const { validateToken } = require("../../helpers/auth-token");

const objClient = new Client();

router.get("/", objClient.getAll);
router.get("/client/:clientId",validateToken, objClient.getById);
router.post("/create", objClient.create);
router.put("/update/:clientId",validateToken, objClient.update);
router.delete("/delete/:clientId",validateToken, objClient.delete);

module.exports= router;