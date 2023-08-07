import './Formulario.css'
import CampoTexto from "../CampoTexto";
import ListaOpciones from "../ListaOpciones";
import Boton from "../Boton";
const Formulario = () => {

    const manejarEnvio = (event) => {
        // event tambien es representado solo con la 'e' en algunos casos
        event.preventDefault()
        console.log('Manejar el envio', event)
    }

    return <section className='formulario'>
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador</h2>
            <CampoTexto title='Nombre' placeholder='Ingresar nombre' required={true} />
            <CampoTexto title='Puesto' placeholder='Ingresar puesto' required={true} />
            <CampoTexto title='Foto' placeholder='Ingresar enlace de foto' required/>
            <ListaOpciones />
            <Boton>
                Crear
            </Boton>
        </form>
    </section>
}

export default Formulario