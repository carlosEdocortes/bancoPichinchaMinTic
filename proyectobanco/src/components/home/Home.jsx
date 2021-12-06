import credito from '../../images/tarjet.png'// with import
import simulador from '../../images/simulador.svg'; // with import
import fondo from '../../images/fondoinici.svg'; // with import
import certificado from '../../images/certificado.svg'; // with import
import './home.css'
export function Home() {
    return (
        <>

            <body>
                <div className="container-sm">
                    <img src={fondo} alt="fondo" className="img-fluid" />
                </div>

                <div className="container-sm col-12">
                    <h1 className="conoce text-center">CONOCE Y SOLICITA NUESTROS PRODUCTOS</h1>
                    <div className="box">
                        <div>
                            <img src={credito} alt="imagen" className="credit" />
                            <h3 className="descripcion text-center">CREDITO</h3>
                            <h6 className="conoce text-center">Solicitud para vivienda</h6>
                        </div>
                        <div>
                            <img src={simulador} alt="imagen" className="credit" />
                            <h3 className="descripcion text-center">SIMULADOR DE PAGO</h3>
                            <h6 className="conoce text-center">Simula el pago de tus <br></br> creditos pre-aprobados </h6>
                        </div>
                        <div>
                            <img src={certificado} alt="imagen" className="credit" />
                            <h3 className="descripcion text-center">CERTIFICADO</h3>
                            <h6 className="conoce text-center">Número de cuotas <br></br> pagadas </h6>
                        </div>


                    </div>
                </div>
            </body>


        </>
    );
}


