const express = require("express");
const ProductModel = require("../../models/Product");
// const CategoryProductModel = require("../../models/CategoryProduct");

class Product {
  async getAll(req, res) {
    const response = await ProductModel.findAll({
      attributes: [
        "id",
        "ref",
        "name",
        "brand",
        "amount",
        "price",
        "discount_price",
      ],
      // include: {
      //   model: CategoryProductModel,
      //   attributes: ["id", "name", "discount_price"],
      // },
    });
    res.status(200).json({
      response,
    });
  }
  async getById(req, res) {
    const { productId } = req.params
    const response = await ProductModel.findOne({ where: { id: productId } });

    res.status(200).json({
    response
    });
  }

  async create(req, res) {
    const dataProduct = req.body;
    const response = await ProductModel.create(dataProduct);
    res.status(200).json({
      ok: true,
      status: 201,
      message: "product created",
      data: response,
    });
  }

async update(req,res){   
  const {productId} = req.params
  const dataProduct = req.body
  console.log('update', dataProduct);
  const response = await ProductModel.update(dataProduct, {
    where:{
        id: productId


    }

  });
  res.status(200).json({
    ok: true,
    status: 200,
    message: "product updated",
    data: response

    })
  }

  
    async delete(req,res) {  
        const {productId}= req.params
        const response =await ProductModel.destroy({
          where:{
            id:productId
          }  
        });

        res.status(200).json({
            ok: true,
            status: 201,
            message: "product delete",
            data: response,
    })
}


}
module.exports = Product;
