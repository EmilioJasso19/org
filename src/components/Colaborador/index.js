import './Colaborador.css'
import { AiFillCloseCircle, AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import hexToRgba from "hex-to-rgba";


const Colaborador = (props) => {
    const { nombre, puesto, foto, equipo, id, fav } = props.datos
    const { colorPrimario, eliminarColaborador, like } = props

    return <div className='colaborador'>
        <AiFillCloseCircle color='#E5E5E5' className='eliminar' onClick={() => eliminarColaborador(id)} />
        <div className='encabezado' style={{backgroundColor: colorPrimario}}>
            <img
                src={foto}
                 alt={nombre}
            />
        </div>
        <div className="info">
            <h4>{nombre}</h4>
            <h5>{puesto}</h5>
            { fav ? <AiFillHeart color='#F33' onClick={() => like(id)} /> : <AiOutlineHeart onClick={() => like(id)} />}
        </div>
    </div>
}

export default Colaborador