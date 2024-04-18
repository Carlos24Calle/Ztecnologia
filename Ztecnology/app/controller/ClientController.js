const ClientModel = require("../../models/Client");

class Client {
  async getAll(req, res) {
    const response = await ClientModel.findAll();
    res.status(200).json({
      response,
    });
  }

  async getById(req, res) {
    const { clientId } = req.params;
    const response = await ClientModel.findOne({ where: { id: clientId } });

    res.status(200).json({
      response,
    });
  }

  async create(req, res) {
    const dataClient = req.body;
    const ClientExisting = await ClientModel.findOne({
      where: { number_document: dataClient?.number_document },
    });
    if (ClientExisting === null) {
      const createClient = await ClientModel.create(dataClient);

      res.status(201).json({
        ok: true,
        status: 201,
        message: "Client created",
        response: createClient,
      });
    } else {
      res.status(200).json({
        ok: true,
        status: 200,
        message: "El cliente ya registrado",
      });
    }
  }
 

  async update(req,res){
      const { clientId } = req.params
      const dataClient = req.body
      const response = await ClientModel.update(dataClient, {
        where:{
            id: clientId

        }

      });
      res.status(200).json({
        ok: true,
        status: 200,
        message: "Client updated",
      

        })

      }

        async delete(req,res) {
            const {clientId}= req.params
            const response =await ClientModel.destroy({
              where:{
                id:clientId
              }
            });

            res.status(200).json({
                ok: true,
                status: 201,
                message: "Client delete"
               
        })
  }
}
module.exports = Client;
