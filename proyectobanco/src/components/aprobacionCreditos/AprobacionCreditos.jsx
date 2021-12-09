import React from "react";
import './aprobacionCreditos.css';

export function AprobacionCreditos() {
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
                <h1 className="titulo-principal">APROBACION CREDITOS</h1>
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
                            <th scope="col">Valor credito</th>
                            <th scope="col">Numero Cuotas</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row"><input type="checkbox"/></th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>Mark</td>
                            <td>Otto</td>
                        </tr>
                        <tr className="row-2"> 
                            <th scope="row"><input type="checkbox"/></th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>Mark</td>
                            <td>Otto</td>
                        </tr>
                        <tr>
                            <th scope="row"><input type="checkbox"/></th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>Mark</td>
                            <td>Otto</td>
                        </tr>
                        <tr className="row-2">
                            <th className="row-2" scope="row"><input type="checkbox"/></th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>Mark</td>
                            <td>Otto</td>
                        </tr>
                        <tr>
                            <th scope="row"><input type="checkbox"/></th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>Mark</td>
                            <td>Otto</td>
                        </tr>
                        <tr className="row-2">
                            <th className="row-2" scope="row"><input type="checkbox"/></th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>Mark</td>
                            <td>Otto</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <br />

            <div className="row pb-4">
                <div className="col-8"></div>
                <div className="col-2 ps-5 text-end">
                    <button className="boton encabezado text-boton" name="aprobar" id="aprobar">Aprobar</button>
                </div>
                <div className="col-2">
                    <button className="encabezado text-boton boton2" name="rechazar" id="rechazar">Rechazar</button>
                </div>
            </div>
        </>
    );
}