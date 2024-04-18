const express = require('express')
const routers = require ('../api')
const cors = require("cors")
const dotenv = require('dotenv')
require ('../bd/Association')
const morgan = require('morgan')
const app = express()


//Middleware
app.use(cors());
app.use(morgan('dev'))
app.use(express.json())

routers (app)


module.exports=app;