const jwt = require('jsonwebtoken');

const generateToken = (data) =>{
    return new Promise((resolve, reject) => {
        const payload = {data};
        jwt.sign(payload, 'SECRET_KEY', (err, token) => {
            if(err){ 
                
                console.log(err);
                reject('No se pudo generar el token')
              

            }else{
                resolve(token);
            }

        })
    })
}
const validateToken = (req,res,next) =>{
    const token = req.header('x-token');
    console.log('header token', token);

    if(!token){
        return res.status(401).json({
            satatus:401,
            message:'No hay token'
        })
    }
    try{
        const resultToken= jwt.verify(token, process.env.SECRETORPRIVATEKEY || 'SECRET_KEY');
        console.log('resultToken',resultToken);
        next();
    }catch(error){
        return res.status(401).json({
            msg:'401 No esta autorizado'
        })
    }
}
module.exports = {generateToken,
validateToken
}