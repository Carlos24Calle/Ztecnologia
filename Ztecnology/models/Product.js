const { DataTypes, Model} = require("sequelize");
const sequelize= require('../bd/Connection')

class Product extends Model {}

Product.init({
    // Model attributes are defined here
    id:{
        type:DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey:true

    },
    ref: {
      type: DataTypes.STRING,
      allowNull: false
    },  

name: {
  type: DataTypes.STRING,
  allowNull: false
},
brand: {
  type: DataTypes.STRING,
   allowNull:true
},
amount: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  price: {
    type: DataTypes.DECIMAL(10.0),
     allowNull:true
  },
  discount_price: {
    type: DataTypes.DECIMAL(10,0),
     allowNull:true
  }
  
  }, {
    // Other model options go here
    sequelize,                 // We need to pass the connection instance
  modelName: 'product'            // We need to choose the model name

});
  
module.exports=Product;
