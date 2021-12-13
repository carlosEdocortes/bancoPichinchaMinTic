const express = require("express");
const { jugadores } = require("./datosjugadores")
const { usuarios } = require("./usuarios")
const { login } = require("./login")
const { registro } = require("./registro")
const { contacto } = require("./contacto")
const app = express();
const cors = require("cors");
app.use(cors())

app.get('/', function (req, res) {
    res.send(200, "hola Bienvenido");
});
app.get('/jugadores/:nombre', function (req, res) {
    const ju = jugadores.find(j => j.nombre === req.params.nombre)
    res.send(ju);
});
app.get('/login/:nombre/', function (req, res) {
    const us = usuarios.find(j => j.usuario === req.params.nombre)
    res.send(us);
})

app.get('/logins/:nombre/', function (req, res) {
    const log = login.find(j => j.usuario === req.params.nombre)
    if(!log){
        res.send("El usuario no existe, vuelva a intentar");
    }
    if (log.usuario == "prueba") {
        if(log.contraseña == "1234"){
            res.send("Ingreso exitoso");
        }
    }
    if (log.usuario == "prueba1") {
        if(log.contraseña == "12345"){
            res.send("Ingreso exitoso");
        }
    }    
})

app.get('/registro/:identificacion/', function (req, res) {
    const reg = registro.find(j => j.numero_identificacion === req.params.identificacion)
    if(!reg){
        res.send("Faltan datos para el registro del usuario");
    }
   
    res.send("Usuario creado con exito:</br></br>Nombre: " + reg.nombre_completo +
            "</br>Tipo de identificacion: "+reg.tipo_identificacion+
            "</br>Numero de identificacion: "+reg.numero_identificacion+
            "</br>Fecha de nacimiento: "+reg.fecha_nacimiento+
            "</br>Fecha de expedicion del documento: "+reg.fecha_expedicion_documento+
            "</br>Valor de ingresos: "+reg.valor_ingresos+
            "</br>Valor de Egresos: "+reg.valor_egresos+
            "</br>Contraseña: "+reg.contraseña
             ); 
})

app.get('/contacto/:nombre/', function (req, res) {
    const cont = contacto.find(j => j.nombre === req.params.nombre)
    if(!cont){
        res.send("Fallo en el mensaje");
    }
    res.send("Gracias por contactarte " + cont.nombre); 
})

app.listen(8082, () => {
    console.log("estoy corriendo por el puerto 8082")
});