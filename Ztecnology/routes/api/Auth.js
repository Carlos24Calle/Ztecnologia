const express = require('express')
const router = express.Router();
const Auth = require('../../app/controller/AuthController')


const objAuth = new Auth()
router.post('/login', objAuth.login)

module.exports= router


