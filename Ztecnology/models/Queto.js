const { DataTypes, Model} = require ("sequelize");
const sequelize= require('../bd/Connection')

class Queto extends Model {}

Queto.init({
    // Model attributes are defined here
    id:{
        type:DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey:true

    },
    queto_number: {
      type: DataTypes.STRING,
      allowNull: false
    },  


  
  }, {
    // Other model options go here
    sequelize,                 // We need to pass the connection instance
  modelName: 'queto'            // We need to choose the model name

});
  
module.exports=Queto;
