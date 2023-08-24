import './MiOrg.css'
const MiOrg = (props) => {
    /*
    Estado - hooks
    sintaxis de useState
    const [variableActualizable, funcionParaActualizar] = useState(valorInicial)


    const [mostrarForm, actualizarMostrar] = useState(true)
    const manejarClick = () => {
        console.log('Mostrar/Ocultar elemento', mostrarForm)
        actualizarMostrar(!mostrarForm)
    }
     */

    return <section className='orgSection'>
        <h3 className='title'>Mi organizacion</h3>
        <img src='/img/add.png' alt='add' onClick={props.cambiarMostrar} />
    </section>
}

export default MiOrg