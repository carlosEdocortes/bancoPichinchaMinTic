import { Dropdown, DropdownButton } from 'react-bootstrap';
import logo from '../../images/banco-pichincha.svg'
import './estilos.css'
export function Header() {
    const color = '#ffc107'

    return (
        <div>


            <nav className="navbar navbar-light bg-light">
                <a className="navbar-brand" href="www.google.com">
                    <img src={logo} width="150" height="150" className="d-inline-block align-top divStyle" alt="imagen" />
                </a>
                <div className="botones">

                    <a href='/'><button type="button" className="btn btn-warning col botones" href='/'>Inicio</button></a>
                    <a href='/credito'><button type="button" className="btn btn-warning botones" >Credito</button></a>

                    <DropdownButton title="Servicios"  >
                        <Dropdown.Item href="/simularcredito">Simulador crédito</Dropdown.Item>
                        <Dropdown.Item href="/historial">Historial de crédito</Dropdown.Item>
                        <Dropdown.Item href="/prorroga">Solicitud de prorroga</Dropdown.Item>
                    </DropdownButton>

                    <button type="button" className="btn btn-warning  botones">Contactenos</button>

                    <button type="button" className="btn btn-warning  botones">Login</button>
                </div>
            </nav>
        </div>
    );

}