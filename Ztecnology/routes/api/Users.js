const express= require("express");
const router = express.Router();
const User = require('../../app/controller/UserController');
const { validateToken } = require("../../helpers/auth-token");



const objUser = new User();

router.get("/" ,objUser.getAll);
router.get("/users/:userId",validateToken, objUser.getById);
router.post("/create", objUser.create);
router.put("/update/:userId",validateToken, objUser.update);
router.delete("/delete/:userId",validateToken, objUser.delete);

module.exports= router;