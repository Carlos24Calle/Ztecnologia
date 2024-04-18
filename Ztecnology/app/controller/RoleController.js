const RoleModel = require("../../models/Rol");

class Role {
  async getAll(req, res) {
    const response = await RoleModel.findAll();
    res.status(200).json({
      response,
    });
  }

  async getById(req, res) {
    const { rolId } = req.params;
    const response = await RoleModel.findOne({ where: { id: rolId } });

    res.status(200).json({
      response,
    });
  }

  async create(req, res) {
    const dataRole = req.body;
    const RoleExisting = await RoleModel.findOne({where: { name: dataRole?.name }, });
    if (RoleExisting === null) {
    
      const createRole = await RoleModel.create(dataRole);

      res.status(201).json({
        ok: true,
        status: 201,
        message: "Role created",
        response: 'create Role',
      });
    } else {
      res.status(200).json({
        ok: true,
        status: 200,
        message: "El Rol ya registrado",
      });
    }
}
  
 

  async update(req,res){
      const { rolId } = req.params
      const dataRole = req.body
      const response = await RoleModel.update(dataRole, {
        where:{
            id: rolId

        }

      });
      res.status(200).json({
        ok: true,
        status: 200,
        message: "Role updated",

        })

      }
        async delete(req,res) {
            const {rolId}= req.params
            const response =await RoleModel.destroy({
              where:{
                id:rolId
              }
            });

            res.status(200).json({
                ok: true,
                status: 201,
                message: "Role delete"
               
        })
    }
}

module.exports = Role;
