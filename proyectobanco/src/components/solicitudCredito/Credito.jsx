import './credito.css'
import { BsFillHexagonFill, BsFillCreditCardFill, BsClockHistory } from 'react-icons/bs';
export function Credito() {
    return (<>
        <div className="container box">
            <div>
                <h1 className="texto"> Solicitud de crédito de vivienda </h1>
            </div>
            <div className="content ">
                <label className="letra text-justify"><BsFillHexagonFill /> Cuenta Con aprobación y desembolso oportuno  para <br></br> disfrutar de tu vivienda </label><br></br>


                <label className="letra text-justify"><BsFillHexagonFill /> Te brindamos atención personalizada por profesionales <br></br> especializados.  </label><br></br>


                <label className="letra text-justify"><BsFillHexagonFill /> Planes especiales de financiación a tu medida<br></br> Financiamos tu vivienda. </label><br></br>
            </div>

            <div>
                <h4 className="titulo">Valor Solicitado</h4>
                <div className="inp">
                    <BsFillCreditCardFill />
                    <input className="form-control controlinput" type="text" placeholder="Valor Solicitado" />
                </div>

            </div>
            <div>
                <h4 className="titulo">Tiempo del Credito </h4>
                <div className="inp">
                    <BsClockHistory />
                    <input className="form-control controlinput" type="text" placeholder="Tiempo del credito" />
                </div>

            </div>
            <div className="container-sm">
                <button type="button" class="btn btn-primary btn-lg boton">SOLICITAR</button>
            </div>




        </div>


    </>);

}