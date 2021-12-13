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
    
    if (creditos){
        res.json(200, {
            msg:"cliente encontrado",
            datos: creditos
        });
    }
    else{
        res.json(404, {
            msg: "cliente no encontrado",
        });

        return false
    }
})

app.get('/aprobacionProrroga/:documento/', function (req, res) {
    const prorroga = aprobacionProrroga.find(j => j.documento === req.params.documento)

    if (prorroga){
        res.json(200, {
            msg: "cliente encontrado",
            datos: prorroga
        });
    }
    else{
        res.json(404, {
            msg: "cliente no encontrado",
        });

        return false
    }
})

app.get('/consultaCreditosVigentes/:id/', function (req, res) {
    const consulta = consultaCreditosVigentes.find(j => j.id === req.params.id)

    if (consulta){
        res.json(200, {
            msg: "credito encontrado",
            datos: consulta
        });
    }
    else{
        res.json(404, {
            msg: "credito no encontrado",
        });

        return false
    }
})

app.get('/historialPagosClientes/:id/', function (req, res) {
    const consulta = historialPagosClientes.find(j => j.id === req.params.id)

    if (consulta){
        res.json(200, {
            msg: "credito encontrado",
            datos: consulta
        });
    }
    else{
        res.json(404, {
            msg: "credito no encontrado",
        });

        return false
    }
})

app.listen(8082, () => {
    console.log("estoy corriendo por el puerto 8082")
});