import React from "react";
import './login.css';


export function Login() {
    return (
        <>
            <body className="row justify-content-center aling-items-center p-5 fondo-login">
                <form className="row justify-content-center aling-items-center formulario">
                    <h1 className="title_form m-4">LOGIN</h1>
                    <div className="form-floating mb-3">
                        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                        <label for="floatingInput">Numero de identificación</label>
                    </div>
                    <div className="form-floating">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                        <label for="floatingPassword">Password</label>
                    </div>
                    <div className="col-sm-4 text-center">
                        <input type="submit" className="btn btn-warning mt-3" value='Login' />
                    </div>
                    <a className="mb-2" href="/registro">Crear cuenta nueva</a>
                </form>
            </body>
        </>
    );
}