const { DataTypes, Model} = require("sequelize")
const sequelize= require('../bd/Connection')

class Client extends Model {}

Client.init({
    // Model attributes are defined here
    id:{
        type:DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey:true

    },
    type_document: {
      type: DataTypes.ENUM,
      values:['CC','CE'],
      allowNull: false
    },
    number_document: {
      type: DataTypes.INTEGER,
       allowNull:true
    
},
first_name: {
  type: DataTypes.STRING,
   allowNull:true

},
last_name: {
  type: DataTypes.STRING,
   allowNull:true
}
  }, {
    // Other model options go here
    sequelize,                 // We need to pass the connection instance
  modelName: 'client'            // We need to choose the model name

});
  
module.exports=Client;
