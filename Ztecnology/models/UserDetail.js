const { DataTypes, Model} = require("sequelize");
const sequelize= require('../bd/Connection')

class UserDetail extends Model {}

UserDetail.init({
    // Model attributes are defined here
    id:{
        type:DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey:true

    },
    firs_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    last_name: {
      type: DataTypes.STRING,
       allowNull:false
    },
    phone: {
        type: DataTypes.STRING,
         allowNull:false
  
    }
        }, {
    // Other model options go here
    sequelize,                 // We need to pass the connection instance
  modelName: 'userdetail'            // We need to choose the model name

});
  
module.exports=UserDetail;