import React from "react";
import './consultaCreditosVigentes.css';

export function ConsultaCreditosVigentes() {
    return (
        <>
            <div>
                <h1 className="titulo-principal">CONSULTA CREDITOS VIGENTES</h1>
            </div>
            <br />
            <div className="ps-4 pe-4">
                <table className="table">
                    <thead className="thead-dark encabezado titulo-complementario">
                        <tr>
                            <th scope="col">idCredito</th>
                            <th scope="col">Tipo doc</th>
                            <th scope="col">Num doc</th>
                            <th scope="col">Tipo credito</th>
                            <th scope="col">Valor credito</th>
                            <th scope="col">Numero Cuotas</th>
                            <th scope="col">Fecha inicio</th>
                            <th scope="col">Fecha fin</th>
                            <th scope="col">Referencia</th>
                            <th scope="col">Num cuotas</th>
                            <th scope="col">Estado</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                        </tr>
                        <tr class="row-2">
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                            <td>@fat</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                            <td>@fat</td>
                            <td>Thornton</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                            <td>@twitter</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                            <td>@twitter</td>
                            <td>the Bird</td>
                        </tr>
                        <tr class="row-2">
                            <th scope="row">4</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <th scope="row">5</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                            <td>@fat</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                            <td>@fat</td>
                            <td>Thornton</td>
                        </tr>
                        <tr class="row-2">
                            <th scope="row">6</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                            <td>@twitter</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                            <td>@twitter</td>
                            <td>the Bird</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <br />

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
                        <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Numero de documento"/>
                    </div>
                    <div className="col-sm-4 text-center pe-5">
                        <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Nombre de cliente"/>
                    </div>
               </div>
            </form>
            <br />

            <div className="pb-4">
                <div className="row justify-content-end pe-5 pb-2">
                    <button className="boton encabezado text-boton" name="consultar" id="consultar">Consultar</button>
                </div>
                <div className="row justify-content-end pe-5">
                    <button className="encabezado text-boton boton2" name="imprimir" id="imprimir">Imprimir</button>
                </div>
            </div>
        </>
    );
}