

const { DataTypes, Model } = require('sequelize');
const sequelize = require('../bd/Connection');
const Queto = require('./Queto');
const Product = require('./Product');

class QuetoProduct extends Model {}

QuetoProduct.init({
  // Model attributes are defined here
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  product_id: {
    type: DataTypes.UUID,
    references: {
      model: Product,
      key: 'id'
    }
  },
  queto_id: {
    type: DataTypes.UUID,
    references: {
      model: Queto,
      key: 'id'
    }
  },
  amount_product: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  expiration_queto: {
    type: DataTypes.DATE,
    allowNull: false
  }
}, {
  // Other model options go here
  sequelize, // We need to pass the connection instance
  modelName: 'QuetoProduct' // We need to choose the model name
});

module.exports = QuetoProduct;
