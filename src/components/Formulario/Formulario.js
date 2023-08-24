import {useState} from "react";
import './Formulario.css'
import Campo from "../Campo";
import ListaOpciones from "../ListaOpciones";
import Boton from "../Boton";
const Formulario = (props) => {

    // Estados
    const [nombre, actualizarNombre] = useState('')
    const [puesto, actualizarPuesto] = useState('')
    const [foto, actualizarFoto] = useState('')
    const [equipo, actualizarEquipo] = useState('')
    const [ titulo, actualizarTitulo ] = useState('')
    const [color, actualizarColor] = useState('')

    // Destructurar props
    const { registrarColaborador, crearEquipo } = props
    const manejarEnvio = (event) => {
        // event tambien es representado solo con la 'e' en algunos casos
        event.preventDefault()
        /* Ver que los datos estan correctamente relacionados */
        let datosAEnviar = {
            nombre,
            puesto,
            foto,
            equipo
        }
        registrarColaborador(datosAEnviar)
    }

    // Evitar accion por defecto de crearEquipo
    const manejarNuevoEquipo = (e) => {
        e.preventDefault()
        crearEquipo({ titulo, colorPrimario: color })
    }

    return <section className='formulario'>
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador</h2>
            <Campo
                title='Nombre'
                placeholder='Ingresar nombre'
                required={true}
                valor={nombre}
                actualizarValor={actualizarNombre}
            />
            <Campo
                title='Puesto'
                placeholder='Ingresar puesto'
                required={true}
                valor={puesto}
                actualizarValor={actualizarPuesto}
            />
            <Campo
                title='Foto'
                placeholder='Ingresar enlace de foto'
                required
                valor={foto}
                actualizarValor={actualizarFoto}
            />
            <ListaOpciones
                valor={equipo}
                actualizarEquipo={actualizarEquipo}
                equipos={props.equipos}
            />
            <Boton>
                Crear
            </Boton>
        </form>

        <form onSubmit={manejarNuevoEquipo}>
            <h2>Rellena el formulario para crear el equipo</h2>
            <Campo
                title='Titulo'
                placeholder='Ingresar titulo'
                required
                valor={titulo}
                actualizarValor={actualizarTitulo}
            />
            <Campo
                title='Color'
                placeholder='Ingresar el color en Hex'
                required
                valor={color}
                actualizarValor={actualizarColor}
                type='color'
            />

            <Boton>
                Registrar equipo
            </Boton>
        </form>

    </section>
}

export default Formulario