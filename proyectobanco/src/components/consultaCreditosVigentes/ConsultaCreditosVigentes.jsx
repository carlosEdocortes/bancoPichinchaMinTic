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
                            <th scope="col">Numero cuotas</th>
                            <th scope="col">Fecha inicio</th>
                            <th scope="col">Fecha fin</th>
                            <th scope="col">Referencia</th>
                            <th scope="col">Estado</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>C</td>
                            <td>123456</td>
                            <td>Vivienda</td>
                            <td>1000000</td>
                            <td>20</td>
                            <td>01/05/2020</td>
                            <td>01/01/2022</td>
                            <td>C-0001</td>
                            <td>ACTIVO</td>
                        </tr>
                        <tr class="row-2">
                            <th scope="row">2</th>
                            <td>C</td>
                            <td>789456</td>
                            <td>Vivienda</td>
                            <td>500000</td>
                            <td>20</td>
                            <td>01/05/2020</td>
                            <td>01/01/2022</td>
                            <td>C-0002</td>
                            <td>ACTIVO</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>C</td>
                            <td>963852</td>
                            <td>Vivienda</td>
                            <td>100000</td>
                            <td>2</td>
                            <td>01/02/2020</td>
                            <td>01/04/2020</td>
                            <td>C-0003</td>
                            <td>FINALIZADO</td>
                        </tr>
                        <tr class="row-2">
                            <th scope="row">4</th>
                            <td>CE</td>
                            <td>741852</td>
                            <td>Vivienda</td>
                            <td>2500000</td>
                            <td>24</td>
                            <td>15/03/2020</td>
                            <td>15/03/2022</td>
                            <td>C-0004</td>
                            <td>ACTIVO</td>
                        </tr>
                        <tr>
                            <th scope="row">5</th>
                            <td>C</td>
                            <td>258963</td>
                            <td>Vivienda</td>
                            <td>1500000</td>
                            <td>36</td>
                            <td>15/12/2020</td>
                            <td>15/12/2023</td>
                            <td>C-0005</td>
                            <td>ACTIVO</td>
                        </tr>
                        <tr class="row-2">
                            <th scope="row">6</th>
                            <td>C</td>
                            <td>123789</td>
                            <td>Vivienda</td>
                            <td>7000000</td>
                            <td>15</td>
                            <td>01/12/2021</td>
                            <td>01/03/2023</td>
                            <td>C-0006</td>
                            <td>CANCELADO</td>
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