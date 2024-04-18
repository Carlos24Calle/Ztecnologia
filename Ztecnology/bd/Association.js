const User = require('../models/User')
const UserDetail = require('../models/UserDetail')
const Product = require('../models/Product')
const Queto = require('../models/Queto')
const Rol = require('../models/Rol')
const Client = require('../models/Client')
const QuetoProduct = require('../models/QuetoProduct')



// One to One
// Users- UserDetail
User.hasOne(UserDetail, {
    foreignKey: {
        name: 'user_id',
        allowNull: false
    },
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
});
UserDetail.belongsTo(User, {
    foreignKey: 'user_id'
});
// One to hasmany
//Client-Queto
Client.hasMany(Queto, {
    foreignKey: {
        name: 'client_id',
        allowNull: false
    },
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
});
Queto.belongsTo(Client, {
    foreignKey: 'client_id'
});


//One to hasmany
//User-Queto

User.hasMany(Queto, {
    foreignKey: {
        name: 'user_id',
        allowNull: false
    },
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
});
Queto.belongsTo(User, {
    foreignKey: 'user_id'
});

// One to Many
//Rol- UserDetail
Rol.hasMany(UserDetail, {
    foreignKey: {
        name: 'rol_id',
        allowNull: false
    },
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'

});

UserDetail.belongsTo(Rol, {
    foreignKey: 'rol_id'
});





Queto.belongsToMany(Product, { through:  QuetoProduct, foreignKey: 'queto_id'});
Product.belongsToMany(Queto, { through: QuetoProduct, foreignKey: 'product_id'});


// const createModels = async () => {
//     await Rol.sync()
//     await User.sync()
//     await Client.sync()
//     await UserDetail.sync()
   
    // await Queto.sync({alter:true})
//     await Product.sync()
    
//     await QuetoProduct.sync({alter:true})    
    
    
// }

// createModels()