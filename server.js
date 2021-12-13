const express = require("express");
const { jugadores } = require("./datosjugadores")
const { usuarios } = require("./usuarios")
const { aprobacionCreditos } = require("./aprobacionCreditos")
const { aprobacionProrroga } = require("./aprobacionProrroga")
const { consultaCreditosVigentes } = require("./consultaCreditosVigentes")
const { historialPagosClientes } = require("./historialPagosClientes")
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


//rutas dashboards
app.get('/aprobacionCreditos/:documento/', function (req, res) {
    const creditos = aprobacionCreditos.find(j => j.documento === req.params.documento)
    
    if (!creditos){
        res.send({
            status: "error",
            msg: "cliente no encontrado"
        });

        return false
    }
    else{
        res.send({
            status: "ok",
            msg: "cliente encontrado",
            datos: creditos
        });
    }
})

app.get('/aprobacionProrroga/:documento/', function (req, res) {
    const prorroga = aprobacionProrroga.find(j => j.documento === req.params.documento)

    if (!prorroga){
        res.send({
            status: "error",
            msg: "cliente no encontrado"
        });

        return false
    }
    else{
        res.send({
            status: "ok",
            msg: "cliente encontrado",
            datos: prorroga
        });
    }
})

app.get('/consultaCreditosVigentes/:id/', function (req, res) {
    const consulta = consultaCreditosVigentes.find(j => j.id === req.params.id)

    if (!consulta){
        res.send({
            status: "error",
            msg: "credito no encontrado"
        });

        return false
    }
    else{
        res.send({
            status: "ok",
            msg: "credito encontrado",
            datos: consulta
        });
    }
})

app.get('/historialPagosClientes/:id/', function (req, res) {
    const consulta = historialPagosClientes.find(j => j.id === req.params.id)

    if (!consulta){
        res.send({
            status: "error",
            msg: "credito no encontrado"
        });

        return false
    }
    else{
        res.send({
            status: "ok",
            msg: "credito encontrado",
            datos: consulta
        });
    }
})

app.listen(8082, () => {
    console.log("estoy corriendo por el puerto 8082")
});