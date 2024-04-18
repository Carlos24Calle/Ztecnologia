

const app = require('./app/app') //Nos traemos las rutas desde app


//Settings
app.set('port',3000)


app.listen(app.get ('port'), ()=>{
console.log(`Listening on port ${app.get('port')}`)

}
);

