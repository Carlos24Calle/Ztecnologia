const express= require("express");
const router = express.Router();
const Queto = require('../../app/controller/QuetoController');
const { validateToken } = require("../../helpers/auth-token");


const objQueto = new Queto();

router.get("/", objQueto.getAll);
router.get("/queto/:quetoId",validateToken, objQueto.getById);
router.post("/create", objQueto.create);
// router.put("/update/:quetoId", objQueto.update);
// router.delete("/delete/:clientId", objQueto.delete);

module.exports= router;