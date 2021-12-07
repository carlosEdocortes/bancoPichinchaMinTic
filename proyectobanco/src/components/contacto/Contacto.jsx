import React from "react";
import './contacto.css';


export function Contacto() {
    return (
        <>
            <body className="row justify-content-center aling-items-center p-5 fondo-contacto">
                <form className="row justify-content-center aling-items-center formulario">
                    <h1 className="title_form m-3">CONTÁCTANOS</h1>
                    <div class="mb-3">
                        <label for="nombre" class="form-label lbl-contact">Nombre</label>
                        <input type="text" class="form-control" id="nombre" placeholder="" />
                    </div>
                    <div class="mb-3">
                        <label for="telefono" class="form-label lbl-contact">Teléfono</label>
                        <input type="tel" class="form-control" id="telefono" placeholder="" required/>
                    </div>
                    <div class="mb-3">
                        <label for="email" class="form-label lbl-contact">Correo electrónico</label>
                        <input type="email" class="form-control" id="email" placeholder="name@example.com" required/>
                    </div>
                    <div class="mb-3">
                        <label for="mensaje" class="form-label lbl-contact">Mensaje </label>
                        <textarea class="form-control" id="mensaje" rows="3" required></textarea>
                    </div>
                    <div className="col-sm-4 text-center mb-3">
                        <input type="submit" className="btn btn-warning mt-3" value='Enviar' />
                    </div>
                </form>
            </body>
        </>
    );
}