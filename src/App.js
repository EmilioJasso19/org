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
            puesto: 'Personita',
            foto: 'https://avatars.githubusercontent.com/u/123335629?s=96&v=4',
            equipo: 'Personas normales',
            fav: true
        },
        {

            id: uuid(),
            nombre: "Tony Stark",
            puesto: "Iron-Man",
            foto: "https://i.pinimg.com/originals/40/cc/95/40cc95f21c4596a28e833ff7527b77cb.png",
            equipo: "Los Vengadores",
            fav: false
        },
        {

            id: uuid(),
            nombre: "Steve Rogers",
            puesto: "Capitan America",
            foto: "https://i.pinimg.com/474x/32/11/ef/3211efbab4dd5ee7a0a9ea561494a1ea.jpg",
            equipo: "Los Vengadores",
            fav: false
        },
        {

            id: uuid(),
            nombre: "Charles Xavier",
            puesto: "Profesor X",
            foto: "https://i.pinimg.com/564x/5d/f8/05/5df8058334236eefb3675947cfdef118.jpg",
            equipo: "X-Men",
            fav: false
        },
        {

            id: uuid(),
            nombre: "Reed Richards",
            puesto: "Mr. Fantastic",
            foto: "https://i.pinimg.com/736x/05/3f/0e/053f0ee86947f87c15341c6f3f22b494.jpg",
            equipo: "Los 4 Fantasticos",
            fav: false
        },
        {

            id: uuid(),
            nombre: "Wade Wilson",
            puesto: "Deadpool",
            foto: "https://i.pinimg.com/550x/ae/ea/7c/aeea7c61fd0e44de66db8d12a6287e38.jpg",
            equipo: "X-Force",
            fav: false
        },
        {

            id: uuid(),
            nombre: "Peter Parker",
            puesto: "Spider-Man",
            foto: "https://cdn-icons-png.flaticon.com/256/1090/1090806.png",
            equipo: "Vecindario",
            fav: false
        }])

    const [ equipos, actualizarEquipos ] = useState([
        {
            id: uuid(),
            titulo: 'Los Vengadores',
            colorPrimario: '#57C278',
            colorSecundario: '#D9F7E9'
        },
        {
            id: uuid(),
            titulo: 'Los 4 Fantasticos',
            colorPrimario: '#82CFFA',
            colorSecundario: '#E8F8FF'
        },
        {
            id: uuid(),
            titulo: 'X-Men',
            colorPrimario: '#A6D157',
            colorSecundario: '#F0F8E2'
        },
        {
            id: uuid(),
            titulo: 'X-Force',
            colorPrimario: '#E06B69',
            colorSecundario: '#FDE7E8'
        },
        {
            id: uuid(),
            titulo: 'Vecindario',
            colorPrimario: '#DB6EBF',
            colorSecundario: '#FAE9F5'
        },
        {
            id: uuid(),
            titulo: 'Personas normales',
            colorPrimario: '#FFBA05',
            colorSecundario: '#FFF5D9'
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
