import './prorroga.css';

export function Prorroga() {
    return (
        <>
            <div className='container'>
                <div>
                    <h1 className='titl'>
                        Formulario para solicitud de prorroga
                    </h1>
                </div>
                <div>
                    <h4> <li>Especifique la razón por la cual requiere realizar la prorroga de alguno de sus productos e indique la cantidad</li>  <br></br>de cuotas que desea aplazar </h4>
                </div>
                <div>
                    <input type="text" className='textb'></input>
                </div>
                <div className='conta'>
                    <ul>
                        <h4><li>El maximo de cuotas que se permite aplazar es de 6</li></h4>


                        <h4><li>Esta cantidad de cuotas no podrá ser mayor al 25 % de la cantidad de cuotas restantes</li></h4>
                    </ul>
                    <label>Seleccione cantidad de cuotas</label>
                    <select name="select" className='lb'>
                        <option value="1" selected>1</option>
                        <option value="2" >2</option>
                        <option value="3">3</option>
                        <option value="3">4</option>
                        <option value="3">5</option>
                        <option value="3">6</option>
                    </select>

                </div>
                <div className='contb'>
                    <input type='button' className=' btn btn-warning bt' value="Enviar"></input>
                </div>



            </div>

        </>
    );
}