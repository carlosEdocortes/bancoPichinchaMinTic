import React from "react";
import './registro.css';


export function Registro() {
    return (
        <>
            <body>
                <div class="container_form_box container_form_box_s">
                    <form action="/registro_usuario/" method="post" name="registro_usuario" class="form_box form_box_s">
                        <h1 class="title_form">Registro usuarios</h1>
                        <input class="input_form" type="text" name="usuario" id="usuario" placeholder="Ingrese usuario" />
                        <input class="input_form" type="password" name="password" id="password" placeholder="Ingrese contraseña" />
                        <input class="input_form" type="text" name="nombre" id="nombre" placeholder="Ingrese nombre" />
                        <input class="input_form" type="text" name="apellido" id="apellido" placeholder="Ingrese apellido" />
                        <input class="input_form" type="text" name="direccion" id="direccion" placeholder="Ingrese direccion" />
                        <input class="input_form" type="phone" name="telefono" id="telefono" placeholder="Ingrese teléfono" />
                        <input class="input_form" type="text" name="tipo_usuario" id="tipo_usuario" placeholder="Ingrese el tipo de usuario" />
                        <input class="btn_form btn_form_s" type="submit" value="Registrar usuario" />
                    </form>
                </div>
            </body>
        </>
    );
}