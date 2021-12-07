import { Link } from 'react-router-dom';
import logo from '../../images/banco-pichincha.svg'
import './estilos.css'
export function Header() {
    const divStyle = {
        'margin-left': '20px',
        'margin-right': '20px'
    };

    return (
        <div>


            <nav className="navbar navbar-light bg-light">
                <a className="navbar-brand" href="www.google.com">
                    <img src={logo} width="150" height="150" className="d-inline-block align-top divStyle" alt="imagen" />
                </a>
                <div className="botones">

                    <a href='/'><button type="button" className="btn btn-warning col botones" href='/'>Inicio</button></a>
                    <a href='/credito'><button type="button" className="btn btn-warning separacion botones" >Credito</button></a>

                    <button type="button" className="btn btn-warning separacion botones">Servicios</button>

                    <a href='/contacto'><button type="button" className="btn btn-warning separacion botones">Contactenos</button></a>

                    <a href='/login'><button type="button" className="btn btn-warning separacion botones">Login</button></a>
                </div>
            </nav>
        </div>
    );

}