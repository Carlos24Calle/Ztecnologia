const bcrypt = require("bcryptjs");
const UserModel = require("../../models/User");
const {generateToken} = require("../../helpers/auth-token");
// const generateToken=('../../helpers/auth-token')

class Auth {
  async login(req, res) {
    const { email, password } = req.body;

    try {
      const login = await UserModel.findOne({ where: { email } });
      console.log("login", login);

      //Validate si el usuario existe
      if (!login) {
        return res.status(400).json({
          status: 400,
          message: "El usuario no esta registrado",
        });
      }

      //Verificar la contraseña

      const ValidatePassword = bcrypt.compareSync(password, login?.password);
      if (!ValidatePassword) {
        return res.status(400).json({
          status: 400,
          message: " Contraseña incorrecta",
        });
      }
     //Generate Jwtoken
    const token = await generateToken({id:login?._model, email:login?.email});
//    console.log('token',token);
   return res.status(200).json({
       ok:true,
       status:200,
       token,
       user: login,
    
   })






    } catch (error) {
      console.log(error);
    }
  }
}
module.exports = Auth;
