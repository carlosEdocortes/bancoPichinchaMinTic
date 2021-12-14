const express = require("express");
const { jugadores } = require("./datosjugadores")
const { usuarios } = require("./usuarios")
const { login } = require("./login")
const { registro } = require("./registro")
const { contacto } = require("./contacto")
const { aprobacionCreditos } = require("./aprobacionCreditos")
const { aprobacionProrroga } = require("./aprobacionProrroga")
const { consultaCreditosVigentes } = require("./consultaCreditosVigentes")
const { historialPagosClientes } = require("./historialPagosClientes")
const { historial } = require("./historialcredito")
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
    const log = login.find(j => j.usuario === req.params.nombre)
    if (!log) {
        res.send("El usuario no existe, vuelva a intentar");
    }
    if (log.usuario == "prueba") {
        if (log.contraseña == "1234") {
            res.send("Ingreso exitoso");
        }
    }
    if (log.usuario == "prueba1") {
        if (log.contraseña == "12345") {
            res.send("Ingreso exitoso");
        }
    }
})

app.get('/registro/:identificacion/', function (req, res) {
    const reg = registro.find(j => j.numero_identificacion === req.params.identificacion)
    if (!reg) {
        res.send("Faltan datos para el registro del usuario");
    }

    res.send("Usuario creado con exito:</br></br>Nombre: " + reg.nombre_completo +
        "</br>Tipo de identificacion: " + reg.tipo_identificacion +
        "</br>Numero de identificacion: " + reg.numero_identificacion +
        "</br>Fecha de nacimiento: " + reg.fecha_nacimiento +
        "</br>Fecha de expedicion del documento: " + reg.fecha_expedicion_documento +
        "</br>Valor de ingresos: " + reg.valor_ingresos +
        "</br>Valor de Egresos: " + reg.valor_egresos +
        "</br>Contraseña: " + reg.contraseña
    );
})

app.get('/contacto/:nombre/', function (req, res) {
    const cont = contacto.find(j => j.nombre === req.params.nombre)
    if (!cont) {
        res.send("Fallo en el mensaje");
    }
    res.send("Gracias por contactarte " + cont.nombre);
})
//rutas dashboards
app.get('/aprobacionCreditos/:documento/', function (req, res) {
    const creditos = aprobacionCreditos.find(j => j.documento === req.params.documento)

    if (creditos) {
        res.json(200, {
            msg: "cliente encontrado",
            datos: creditos
        });
    }
    else {
        res.json(404, {
            msg: "cliente no encontrado",
        });

        return false
    }
})

app.get('/aprobacionProrroga/:documento/', function (req, res) {
    const prorroga = aprobacionProrroga.find(j => j.documento === req.params.documento)

    if (prorroga) {
        res.json(200, {
            msg: "cliente encontrado",
            datos: prorroga
        });
    }
    else {
        res.json(404, {
            msg: "cliente no encontrado",
        });

        return false
    }
})

app.get('/consultaCreditosVigentes/:id/', function (req, res) {
    const consulta = consultaCreditosVigentes.find(j => j.id === req.params.id)

    if (consulta) {
        res.json(200, {
            msg: "credito encontrado",
            datos: consulta
        });
    }
    else {
        res.json(404, {
            msg: "credito no encontrado",
        });

        return false
    }
})

app.get('/historialPagosClientes/:id/', function (req, res) {
    const consulta = historialPagosClientes.find(j => j.id === req.params.id)

    if (consulta) {
        res.json(200, {
            msg: "credito encontrado",
            datos: consulta
        });
    }
    else {
        res.json(404, {
            msg: "credito no encontrado",
        });

        return false
    }
})
app.get('/simulacioncredito/:tipo/:cuotas/:valor', function (req, res) {

    let valor_capital = req.params.valor ? req.params.valor : "no ingresó el valor";
    let cuotas = req.params.cuotas ? req.params.cuotas : "no ingresó la cuota";
    let tasamensual = 0.021;


    if (!valor_capital || !cuotas) {
        res.json(404, {
            msg: "Error No se ingresan todos los parametros"
        })
    } else {
        let valorCuota = (valor_capital * (tasamensual * (1 + tasamensual) ^ cuotas)) / (((1 + tasamensual) ^ cuotas) - 1);
        res.json(200, {
            msg: "Simulación realizada con exito",
            data: valorCuota
        })
    }
})
app.get('/historial/:cedula', function (req, res) {
    let approved = historial.filter(his => his.noCedula === req.params.cedula);
    const cedula = historial.find(j => j.noCedula === req.params.cedula)

    if (cedula) {
        res.json(200, {
            msg: "Historial encontrado",
            datos: cedula,
            datos2: approved
        });
    }
    else {
        res.json(404, {
            msg: "Historial no encontrado",
        });
    }
})
app.get('/solicitudprorroga', function (req, res) {
    res.json(200, {
        msg: "solicitud enviada con exito"

    })
})

app.listen(8082, () => {
    console.log("estoy corriendo por el puerto 8082")
});