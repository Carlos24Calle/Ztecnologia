const express= require("express");
const router = express.Router();
const UserDetail = require('../../app/controller/UserDetailController');
const { validateToken } = require("../../helpers/auth-token");



const objUserDetail = new UserDetail();

router.get("/userdetail/:userdetailid", objUserDetail.getById);
router.put("/update/:userdetailid", objUserDetail.update);

module.exports= router;                                        