import './ListaOpciones.css'
function ListaOpciones() {

    // Metodo map() -> arreglo.map( (equipo) => {}
    const equipos = [
        'Programacion',
        'Front End',
        'Data Science',
        'Devops',
        'UX y Diseño',
        'Movil',
        'Innovacion y Gestión',
    ]

    return <div className='lista-opciones'>
        <label>Equipos</label>
        <select>
            { equipos.map( (equipo, index) => <option key={index}>{equipo}</option>)}
        </select>
    </div>
}

export default ListaOpciones