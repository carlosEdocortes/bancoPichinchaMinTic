import './simularcredito.css'
export function Simularcredito() {
    return (<>

        <div className="cont">
            <h1 className="text1">Simula tu crédito</h1>

            <h3 className="text1">Tipo de crédito</h3>
            <input type="text" placeholder="Selecciona la Opcion" className="form-control inp"></input>
            <h3 className="text1">Cuotas</h3>
            <input type="text" placeholder="Selecciona la Opcion" className="form-control inp"></input>
            <h3 className="text1">Valor a financiar</h3>
            <input type="text" placeholder="Selecciona la Opcion" className="form-control inp" aria-label="Large" aria-describedby="inputGroup-sizing-sm"></input>
        </div>
        <div className="conte">
            <input type="button" value="Simular Crédito" className="btn btn-warning botonalign"></input>
            <input type="button" value="Salir" className="btn btn-light botonaligndos font-weight-bold " ></input>
        </div>
        <div className="contfoot">
            <h4>* El cargo por servicios incluye servicios de tecnología, finanzas, seguros, y demás cargos aplicables según el producto.<br></br> Los valores mencionados  son estimados y la cuota final puede variar. Al continuar estas aceptando los términos <br></br> y condiciones Valores en pesos colombianos y validos unicamente para el día de hoy.</h4>
        </div>

    </>
    );
}