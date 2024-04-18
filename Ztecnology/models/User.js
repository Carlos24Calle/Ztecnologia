const { DataTypes, Model} = require("sequelize");
const sequelize= require('../bd/Connection')

class User extends Model {}

User.init({
    // Model attributes are defined here
    id:{
        type:DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey:true

    },
    email: {
      type: DataTypes.STRING,
      unique:true,
      allowNull:false,
      validate:{
        isEmail:{
          msg:'La direccion de correo electronico debe ser valida'
        }
      }
    },
    password: {
      type: DataTypes.STRING,
       allowNull:false
    }
  }, {
    // Other model options go here
    sequelize,                 // We need to pass the connection instance
  modelName: 'user'            // We need to choose the model name

});
  
module.exports=User;