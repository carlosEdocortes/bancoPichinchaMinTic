import React from "react";
import './histPagosCientes.css';

export function HistPagosClientes() {
    return (
        <>
           <form>
               <div className="row">
                    <div className="col-sm-4 text-center ps-5">
                        <select className="form-control" id="exampleFormControlSelect1">
                            <option selected value="0"> Tipo de documento </option>
                            <option>C.C. Cedula de ciudadanía</option>
                            <option>C.E. Cedula de extranjería</option>
                            <option>C.D. Carnet diplomático</option>
                            <option>P Pasaporte</option>
                        </select>
                    </div>
                    <div className="col-sm-4 ps-2 pe-2">
                        <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Número de documento"/>
                    </div>
                    <div className="col-sm-4 text-center pe-5">
                        <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Referencia de credito"/>
                    </div>
               </div>
            </form>
            <br />

            <div className="col-sm-12 text-center mb-3">
                <button className="boton encabezado text-boton" name="consultar" id="consultar">Consultar</button>
            </div>
            <br />
            <div>
                <h1 className="titulo-principal">HISTORIAL PAGOS CLIENTES</h1>
            </div>
            <br />
            <div className="ps-4 pe-4">
                <table className="table">
                    <thead className="thead-dark encabezado titulo-complementario">
                        <tr>
                            <th scope="col">idPago</th>
                            <th scope="col">Fecha pago</th>
                            <th scope="col">Nombre Cliente</th>
                            <th scope="col">Metodo pago</th>
                            <th scope="col">Referencia credito</th>
                            <th scope="col"># Cuota</th>
                            <th scope="col">Valor pagado</th>
                            <th scope="col">Saldo</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>02/02/2020</td>
                            <td>Heyder Belalcazar</td>
                            <td>PSE</td>
                            <td>C-0001</td>
                            <td>1</td>
                            <td>10000</td>
                            <td>300000</td>
                        </tr>
                        <tr class="row-2">
                            <th scope="row">2</th>
                            <td>02/02/2021</td>
                            <td>Arnold Suarez</td>
                            <td>PSE</td>
                            <td>C-0002</td>
                            <td>2</td>
                            <td>20000</td>
                            <td>3000000</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>07/08/2020</td>
                            <td>Carlos Cortés</td>
                            <td>Tarjeta credito</td>
                            <td>C-0003</td>
                            <td>5</td>
                            <td>500000</td>
                            <td>100000</td>
                        </tr>
                        <tr class="row-2">
                            <th scope="row">4</th>
                            <td>07/08/2021</td>
                            <td>Lyda Rodriguez</td>
                            <td>Tarjeta credito</td>
                            <td>C-0004</td>
                            <td>6</td>
                            <td>250000</td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <th scope="row">5</th>
                            <td>14/09/2021</td>
                            <td>Aura Casseres</td>
                            <td>Tarjeta credito</td>
                            <td>C-0005</td>
                            <td>8</td>
                            <td>120000</td>
                            <td>120000</td>
                        </tr>
                        <tr class="row-2">
                            <th scope="row">6</th>
                            <td>19/01/2021</td>
                            <td>Jose Perez</td>
                            <td>Tarjeta debito</td>
                            <td>C-0006</td>
                            <td>3</td>
                            <td>130000</td>
                            <td>850000</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <br />

            <div className="row pb-4">
                <div className="col-sm-4 text-center">
                    <button className="boton encabezado text-boton" name="generar" id="generar">Generar reporte</button>
                </div>
                <div className="col-sm-4 text-center">
                    <button className="boton encabezado text-boton" name="exportar" id="exportar">Exportar reporte</button>
                </div>
                <div className="col-sm-4 text-center">
                    <button className="boton encabezado text-boton" name="imprimir" id="imprimir">Imprimir</button>
                </div>
            </div>
        </>
    );
}