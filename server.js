const express = require("express");
const { jugadores } = require("./datosjugadores")
const { usuarios } = require("./usuarios")
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

app.listen(8082, () => {
    console.log("estoy corriendo por el puerto 8082")
});