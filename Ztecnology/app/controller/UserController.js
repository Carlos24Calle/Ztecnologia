const bcrypt = require("bcryptjs");
const UserModel = require("../../models/User");
const UserDetailModel = require("../../models/UserDetail");
const RoleModel = require("../../models/Rol");

class User {
  async getAll(req, res) {
    const response = await UserModel.findAll({
      attributes: ["id", "email"],
      include: {
        model: UserDetailModel,
        attributes: ["id", "firs_name", "last_name", "phone"],
        include: {
          model: RoleModel,
          attributes: ["id", "name"],
        },
      },
    });
    res.status(200).json({
      response,
    });
  }


async getById(req, res) {
  const { userId } = req.params
  const response = await UserModel.findOne({ where: { id: userId } });

  res.status(200).json({
  response
  });
}

  async create(req, res) {
    const { email,password,firs_name,last_name,phone,rol_id } = req.body;
    const userExisting = await UserModel.findOne({ where: { email } });
    if (userExisting === null) {
      const salt = bcrypt.genSaltSync();
      const passwordHash = bcrypt.hashSync(password, salt);

      const createUser = await UserModel.create({email,password:passwordHash})
      .then((result) => {
        console.log('result',result);
        return result
      }).catch((error)=>{
        console.log('error',error?.message);
        return error?.message
      });
       if(createUser?.id)
      await UserDetailModel.create({firs_name,last_name,phone,user_id:createUser?.id,rol_id})
      
      res.status(201).json({
        ok: true,
        status: 201,
        message: "usuario created",
        data: createUser

      })
    } else {
      res.status(200).json({
        ok: true,
        status: 200,
        message: "usuario ya registrado",
        
      });
    }
  }


  async update(req,res){   
    const {userId} = req.params
    const dataUser = req.body
    console.log('update', dataUser);
    const response = await UserModel.update(dataUser, {
      where:{
          id: userId
  
  
      }

    });
    res.status(200).json({
      ok: true,
      status: 200,
      message: "user updated",
      data: response
  
     

  })
}

  
async delete(req,res) {  
    const {userId}= req.params
    const response =await UserModel.destroy({
      where:{
        id:userId
      }  
    });

    res.status(200).json({
        ok: true,
        status: 201,
        message: "user delete",
        data: response,
})
  }
}
module.exports = User;
