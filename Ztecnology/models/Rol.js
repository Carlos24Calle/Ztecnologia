const { DataTypes, Model} = require("sequelize");
const sequelize= require('../bd/Connection')

class Rol extends Model {}

Rol.init({
    // Model attributes are defined here
    id:{
        type:DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey:true

    },

name: {
  type: DataTypes.STRING,
  allowNull: false
},

  
  }, {
    // Other model options go here
    sequelize,                 // We need to pass the connection instance
  modelName: 'rol'            // We need to choose the model name

});
  
module.exports=Rol;
