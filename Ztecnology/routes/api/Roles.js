const express= require("express");
const router = express.Router();
const Role = require('../../app/controller/RoleController');
const { validateToken } = require("../../helpers/auth-token");

const objRole = new Role();

router.get("/", validateToken,objRole.getAll);
router.get("/role/:rolId",validateToken, objRole.getById);
router.post("/create", objRole.create);
router.put("/update/:rolId",validateToken, objRole.update);
router.delete("/delete/:rolId",validateToken, objRole.delete);

module.exports= router;