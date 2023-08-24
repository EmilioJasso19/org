import { useState } from "react";
import { v4 as uuid } from 'uuid'
import './App.css';
import Header from "./components/Header/Header";
import Formulario from "./components/Formulario/Formulario";
import MiOrg from "./components/MiOrg";
import Equipo from "./components/Equipo";
import Footer from "./components/Footer";

function App() {

    // Estados
    const [mostrarFormulario, actualizarMostrar] = useState(false)
    const [colaboradores, actualizarColaboradores] = useState([
        {
            id: uuid(),
            nombre: 'Emilio Jasso',
            puesto: 'Programador',
            foto: 'https://avatars.githubusercontent.com/u/123335629?s=96&v=4',
            equipo: 'Front End',
            fav: true
        },
        {

            id: uuid(),
            nombre: "Harland Lohora",
            puesto: "Instructor",
            foto: "https://github.com/harlandlohora.png",
            equipo: "Front End",
            fav: false
        },
        {

            id: uuid(),
            nombre: "Genesys Rondon",
            puesto: "Desarrolladora de software e instructora",
            foto: "https://github.com/genesysrm.png",
            equipo: "Programacion",
            fav: false
        },
        {

            id: uuid(),
            nombre: "Jeanmarie Quijada",
            puesto: "Instructora en Alura Latam",
            foto: "https://github.com/JeanmarieAluraLatam.png",
            equipo: "UX y Diseño",
            fav: false
        },
        {

            id: uuid(),
            nombre: "Christian Velasco",
            puesto: "Head de Alura e Instructor",
            foto: "https://github.com/christianpva.png",
            equipo: "Programacion",
            fav: false
        },
        {

            id: uuid(),
            nombre: "Jose Gonzalez",
            puesto: "Dev FullStack",
            foto: "https://github.com/JoseDarioGonzalezCha.png",
            equipo: "Innovacion y Gestión",
            fav: false
        }])

    const [ equipos, actualizarEquipos ] = useState([
        {
            id: uuid(),
            titulo: 'Programación',
            colorPrimario: '#57C278',
            colorSecundario: '#D9F7E9'
        },
        {
            id: uuid(),
            titulo: 'Front End',
            colorPrimario: '#82CFFA',
            colorSecundario: '#E8F8FF'
        },
        {
            id: uuid(),
            titulo: 'Data Science',
            colorPrimario: '#A6D157',
            colorSecundario: '#F0F8E2'
        },
        {
            id: uuid(),
            titulo: 'Devops',
            colorPrimario: '#E06B69',
            colorSecundario: '#FDE7E8'
        },
        {
            id: uuid(),
            titulo: 'UX y Diseño',
            colorPrimario: '#DB6EBF',
            colorSecundario: '#FAE9F5'
        },
        {
            id: uuid(),
            titulo: 'Movil',
            colorPrimario: '#FFBA05',
            colorSecundario: '#FFF5D9'
        },
        {
            id: uuid(),
            titulo: 'Innovacion y Gestión',
            colorPrimario: '#FF8A29',
            colorSecundario: '#FFEEDF'
        }
        ])

    const cambiarMostrar = () => {
        actualizarMostrar(!mostrarFormulario)
    }

    // Registrar colaborador
    const registrarColaborador =(colaborador) => {
        console.log('nuevo colaborador', colaborador)
        actualizarColaboradores([...colaboradores, colaborador])
    }

    // Eliminar colaborador
    const eliminarColaborador = (id) => {
        console.log('Eliminar colaborador', id)
        const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id)
        actualizarColaboradores(nuevosColaboradores)
    }

    // Actualizar color
    const actualizarColor = (color, id) => {
        console.log('Actualizar: ', color, id)
        const equiposActualizados = equipos.map((equipo) => {
            if (equipo.id === id) {
                equipo.colorPrimario = color
            }
            return equipo
        })

        actualizarEquipos(equiposActualizados)
    }

    // Crear equipo
    const crearEquipo = (nuevoEquipo) => {
        console.log(nuevoEquipo)
        actualizarEquipos([...equipos, { ...nuevoEquipo, id: uuid() }])
    }

    // Cambiar fav
    const like = (id) => {
        console.log('like', id)
        const colaboradoresActualizados = colaboradores.map((colaborador) => {
            if (colaborador.id === id) {
                colaborador.fav = !colaborador.fav
            }
            return colaborador
        })
        actualizarColaboradores(colaboradoresActualizados)
    }

    return (
      <div>
        <Header />
          {
              mostrarFormulario && <Formulario
                  equipos={equipos.map((equipo) => equipo.titulo)}
                  registrarColaborador={registrarColaborador}
                  crearEquipo={crearEquipo}
              />
          }

        <MiOrg cambiarMostrar={cambiarMostrar} />

        {
            equipos.map( (equipo) => <Equipo
                datos={equipo}
                key={equipo.titulo}
                colaboradores={colaboradores.filter( colaborador => colaborador.equipo === equipo.titulo )}
                eliminarColaborador={eliminarColaborador}
                actualizarColor={actualizarColor}
                like={like}
            />
            )
        }

        <Footer />
    </div>
    );
}
export default App;
