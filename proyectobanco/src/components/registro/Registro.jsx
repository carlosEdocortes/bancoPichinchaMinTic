import React from "react";
import './registro.css';


export function Registro() {
    return (
    <>
        <body className="row justify-content-center aling-items-center p-5">
            <form className="row justify-content-center aling-items-center formulario">
                <h1 className="title_form m-4">REGISTRO</h1>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="nombreCompleto" placeholder="xx" required/>
                    <label for="nombreCompleto">Nombre Completo</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="tipoIdentidad" placeholder="Password" required/>
                    <label for="tipoIdentidad">Tipo de documento de identidad</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="numIdentificacion" placeholder="Password" required/>
                    <label for="numIdentificacion">Número de identificación</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="fechaNacimiento" placeholder="Password" required/>
                    <label for="fechaNacimiento">Fecha de nacimiento</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="fechaExpedicionDocumento" placeholder="Password" required/>
                    <label for="fechaExpedicionDocumento">Fecha de expedición del documentó</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="valorIngresos" placeholder="Password" required/>
                    <label for="valorIngresos">Valor ingresos</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="valorEgresos" placeholder="Password" required/>
                    <label for="valorEgresos">Valor egresos</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="valorEgresos" placeholder="Password" required/>
                    <label for="valorEgresos">Valor egresos</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="valorEgresos" placeholder="Password" required/>
                    <label for="valorEgresos">Valor egresos</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="password" className="form-control" id="contraseña" placeholder="Password" required/>
                    <label for="contraseña">Contraseña</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="password" className="form-control" id="confirmarContraseña" placeholder="Password" required/>
                    <label for="confirmarContraseña">Confirmar contraseña</label>
                </div>
                <p>Estoy de acuerdo con <a className="mb-2" href="#">Terminos y condiciones</a></p>
                <div className="col-sm-4 text-center">
                    <input type="submit" className="btn btn-warning mt-3" value='Registrar' />
                </div>
                <a className="mb-2" href="/login">Ya tengo una cuenta?</a>
            </form>
        </body>
    </>
    );
}