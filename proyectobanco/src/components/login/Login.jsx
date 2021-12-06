import React from "react";
import './login.css';


export function Login() {
    return (
        <>
            <body className="row justify-content-md-center p-5">
                <form className="formulario">
                    <h1 className="title_form">LOGIN</h1>
                    <div class="form-floating mb-3">
                        <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                        <label for="floatingInput">Numero de identificación</label>
                    </div>
                    <div class="form-floating">
                        <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
                        <label for="floatingPassword">Password</label>
                    </div>
                    <button type="button" class="btn btn-warning m-3">Login</button>
                    <p><a href="/registro">Crear cuenta nueva</a></p>
                </form>
            </body>
        </>
    );
}