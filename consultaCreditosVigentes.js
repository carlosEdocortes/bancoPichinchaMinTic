const consultaCreditosVigentes = [
    {
        "id": "1",
        "tipodoc": "C",
        "documento": "123456",
        "tipoCredito":"Vivienda",
        "valor":"5000000",
        "cuotas":"20",
        "fechaini":"01/05/2020",
        "fechafin":"01/01/2022",
        "referencia":"C-0001",
        "estado":"ACTIVO"
    },
    {
        "id": "2",
        "tipodoc": "C",
        "documento": "789456",
        "tipoCredito":"Vivienda",
        "valor":"500000",
        "cuotas":"20",
        "fechaini":"01/05/2020",
        "fechafin":"01/01/2022",
        "referencia":"C-0002",
        "estado":"ACTIVO"
    },
    {
        "id": "3",
        "tipodoc": "CE",
        "documento": "963852",
        "tipoCredito":"Vivienda",
        "valor":"2500000",
        "cuotas":"24",
        "fechaini":"15/03/2020",
        "fechafin":"15/03/2022",
        "referencia":"C-0003",
        "estado":"CANCELADO"
    }
]

exports.consultaCreditosVigentes = consultaCreditosVigentes;