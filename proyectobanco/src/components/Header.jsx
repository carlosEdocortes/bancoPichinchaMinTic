import logo from '../images/banco-pichincha.svg'
import '../components/estilos.css'
export function Header() {
    const divStyle = {
        'margin-left': '20px',
        'margin-right': '20px'
    };

    return (
        <div>


            <nav className="navbar navbar-light bg-light">
                <a className="navbar-brand" href="www.google.com">
                    <img src={logo} width="50" height="50" className="d-inline-block align-top" alt="imagen" />
                </a>
                <button type="button" className="btn btn-warning">Solicitar Credito</button>
            </nav>
        </div>
    );

}