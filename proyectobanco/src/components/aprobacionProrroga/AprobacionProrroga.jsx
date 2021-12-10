import React from "react";
import './aprobacionProrroga.css';

export function AprobacionProrroga() {
    return (
        <>
            <form>
               <div className="row">
                    <div className="col-sm-3 text-center ps-5">
                        <select className="form-control" id="exampleFormControlSelect1">
                            <option selected value="0"> Tipo de documento </option>
                            <option>C.C. Cedula de ciudadanía</option>
                            <option>C.E. Cedula de extranjería</option>
                            <option>C.D. Carnet diplomático</option>
                            <option>P Pasaporte</option>
                        </select>
                    </div>
                    <div className="col-sm-3 text-center ps-2 pe-2">
                        <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Numero de documento"/>
                    </div>
                    <div className="col-sm-3 text-center pe-5">
                        <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Nombre de cliente"/>
                    </div>

                    <div className="col-3 justify-content-end text-center">
                        <button className="boton encabezado text-boton" name="consultar" id="consultar">Consultar</button>
                    </div>
               </div>    
            </form>
            <br />
            <div>
                <h1 className="titulo-principal">APROBACION PRORROGA</h1>
            </div>
            <br />
            <div className="ps-4 pe-4">
                <table className="table">
                    <thead className="thead-dark encabezado titulo-complementario">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Tipo de documento</th>
                            <th scope="col">Numero de documento</th>
                            <th scope="col">Nombre cliente</th>
                            <th scope="col">Referencia credito</th>
                            <th scope="col">Valor credito</th>
                            <th scope="col">Numero cuotas</th>
                            <th scope="col">Cant cuotas prorroga</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row"><input type="checkbox"/></th>
                            <td>C</td>
                            <td>123456</td>
                            <td>Arnold Suarez</td>
                            <td>C-0001</td>
                            <td>1000000</td>
                            <td>20</td>
                            <td>5</td>
                        </tr>
                        <tr className="row-2"> 
                            <th scope="row"><input type="checkbox"/></th>
                            <td>C</td>
                            <td>789456</td>
                            <td>Heyder Belalcazar</td>
                            <td>C-0002</td>
                            <td>500000</td>
                            <td>20</td>
                            <td>4</td>
                        </tr>
                        <tr>
                            <th scope="row"><input type="checkbox"/></th>
                            <td>C</td>
                            <td>963852</td>
                            <td>Carlos Cortés</td>
                            <td>C-0003</td>
                            <td>100000</td>
                            <td>2</td>
                            <td>1</td>
                        </tr>
                        <tr className="row-2">
                            <th className="row-2" scope="row"><input type="checkbox"/></th>
                            <td>CE</td>
                            <td>741852</td>
                            <td>Lyda Rodriguez</td>
                            <td>C-0004</td>
                            <td>1500000</td>
                            <td>36</td>
                            <td>12</td>
                        </tr>
                        <tr>
                            <th scope="row"><input type="checkbox"/></th>
                            <td>C</td>
                            <td>123789</td>
                            <td>Aura Casseres</td>
                            <td>C-0005</td>
                            <td>7000000</td>
                            <td>15</td>
                            <td>8</td>
                        </tr>
                        <tr className="row-2">
                            <th className="row-2" scope="row"><input type="checkbox"/></th>
                            <td>CD</td>
                            <td>3697852</td>
                            <td>Jose Perez</td>
                            <td>C-0006</td>
                            <td>33000000</td>
                            <td>48</td>
                            <td>11</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <br />

            <div className="row pb-4">
                <div className="col-8"></div>
                <div className="col-2 ps-5 text-end">
                    <button className="boton encabezado text-boton" name="prorrogar" id="prorrogar">Prorrogar</button>
                </div>
                <div className="col-2">
                    <button className="encabezado text-boton boton2" name="rechazar" id="rechazar">Rechazar</button>
                </div>
            </div>
        </>
    );
}