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

                    <button type="button" className="btn btn-warning col botones">Inicio</button>

                    <button type="button" className="btn btn-warning separacion botones">Credito</button>

                    <button type="button" className="btn btn-warning separacion botones">Servicios</button>

                    <button type="button" className="btn btn-warning separacion botones">Contactenos</button>

                    <button type="button" className="btn btn-warning separacion botones">Login</button>
                </div>
            </nav>
        </div>
    );

}