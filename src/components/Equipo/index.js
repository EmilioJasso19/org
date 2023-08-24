import './Equipo.css'
import Colaborador from "../Colaborador";
import hexToRgba from "hex-to-rgba";

const Equipo = (props) => {

    //Destructuracion
    const { colorPrimario, colorSecundario, titulo, id } = props.datos
    const { colaboradores, eliminarColaborador, actualizarColor, like } = props

    const estiloBorde = {
        borderColor: colorPrimario
    }

    const obj = {
        backgroundColor: hexToRgba(colorPrimario, 0.6)
    }

    return <>{ colaboradores.length > 0 &&
            <section className='equipo' style={obj}>
                <input
                    type='color'
                    className='input-color'
                    value={colorPrimario}
                    onChange={(evento) => {
                        actualizarColor(evento.target.value, id)
                    }}
                />
                <h3 style={estiloBorde}>{titulo}</h3>
                <div className='colaboradores'>
                    {
                        colaboradores.map((colaborador, index) => <Colaborador
                            datos={colaborador}
                            key={index}
                            colorPrimario={colorPrimario}
                            eliminarColaborador={eliminarColaborador}
                            like={like}
                        />)
                    }
                </div>
            </section>
        }</>
}

export default Equipo