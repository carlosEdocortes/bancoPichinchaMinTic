import './historial.css'
import { Dropdown, DropdownButton } from 'react-bootstrap';
export function Historial() {

    return (<>
        <input type="button" className="btn btn-warning btn1" hidden="true" value="Reportes"></input>
        <DropdownButton title="Reportes" className="drop"  >
            <Dropdown.Item href="/simularcredito">Excel</Dropdown.Item>
            <Dropdown.Item href="/historial">Pdf</Dropdown.Item>
            <Dropdown.Item href="/prorroga">Csv</Dropdown.Item>
        </DropdownButton>
        <div className="table-responsive-md tabl">
            <table className="table">
                <caption>Historial Crédito</caption>
                <thead>
                    <tr>
                        <th scope="col">id pago</th>
                        <th scope="col">Fecha pago</th>
                        <th scope="col">Nombre Cliente</th>
                        <th scope="col">Metodo Pago</th>
                        <th scope="col">Referencia credito</th>
                        <th scope="col"># Cuota</th>
                        <th scope="col">Valor pagado</th>
                        <th scope="col">Saldo</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>Efectivo</td>
                        <td>001</td>
                        <td>5</td>
                        <td>100000</td>
                        <td>100000</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>Efectivo</td>
                        <td>001</td>
                        <td>5</td>
                        <td>100000</td>
                        <td>100000</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Larry</td>
                        <td>the Bird</td>
                        <td>Transferencia</td>
                        <td>001</td>
                        <td>5</td>
                        <td>100000</td>
                        <td>100000</td>
                    </tr>
                    <tr>
                        <th scope="row">4</th>
                        <td>carlos </td>
                        <td>cortes</td>
                        <td>Transferencia</td>
                        <td>001</td>
                        <td>5</td>
                        <td>100000</td>
                        <td>100000</td>
                    </tr>
                </tbody>
            </table>
        </div>

    </>);
}