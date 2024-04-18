const UserDetailModel = require("../../models/UserDetail");

class UserDetail {
  
  async getById(req, res) {
    const { userdetailid } = req.params;
    const response = await UserDetailModel.findOne({ where: { id: userdetailid } });

    res.status(200).json({
      response,
    });
 
  }
 

  async update(req,res){
      const { userdetailid } = req.params
      const dataUserdetail = req.body
      const response = await UserDetailModel.update(dataUserdetail, {
        where:{
            id: userdetailid

        }

      });
      res.status(200).json({
        ok: true,
        status: 200,
        message: "UserDetail updated",
      

        })

     
  }
}
module.exports = UserDetail;