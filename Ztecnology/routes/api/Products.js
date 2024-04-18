const express= require("express");
const router = express.Router();
const Product = require('../../app/controller/ProductController');
const { validateToken } = require("../../helpers/auth-token");

const objProduct = new Product();

router.get("/", objProduct.getAll);
router.get("/product/:productId", objProduct.getById);
router.post("/create",objProduct.create);
router.put("/update/:productId",validateToken, objProduct.update);
router.delete("/delete/:productId",validateToken, objProduct.delete);

module.exports= router;
