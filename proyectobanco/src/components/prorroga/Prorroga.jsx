import './prorroga.css';

export function Prorroga() {
    return (
        <>
            <div>
                <div>
                    <h1>
                        Formulario para solicitud de prorroga
                    </h1>
                </div>
                <div>
                    <h4>Especifique la razón por la cual requiere realizar la prorroga de alguno de sus productos e indique la cantidad <br></br> de cuotas que desea aplazar </h4>
                </div>
                <div>
                    <input type="text" placeholder="Especifique"></input>
                </div>
                <div>
                    <ul>
                        <li>El maximo de cuotas que se permite aplazar es de 6</li>
                        <li>Esta cantidad de cuotas no podrá ser mayor al 25 % de la cantidad de cuotas restantes</li>
                    </ul>

                </div>


            </div>

        </>
    );
}