import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import './App.css'
import NavBar from "./components/NavBar"
import Novedades from './components/Novedades'
import logo from '../img/logo.png'
import Error from './components/Error'

function App() {

  
    // let open = true

    const suma = () => {
        console.log("estoy sumando");
    }

    // muestra en consola
    // if (open) {
    //     console.log("esta abierto");        
    // }else{
    //     console.log("esta cerrado");
    // }


  // <NavBar titulo = "nombreProyecto/>" === Navbar ('nombreProyecto')
  // estado
    let subtitulo = "Componentes"
    return (
        <>
          {/* mostrar imagen */}
        <img src={logo} alt="" />
        {/* muestra en pantalla */}
        {/* {open ? "open":"closed"} */}
        <div className='App' style={{paddingTop:10,justifyItems:'center',justifyItems:'center'}}>
          <h1>Hola</h1>
          {/* <div>Saludos</div> */}
          <button onClick={suma}>Clickeame</button>
          <input />
        </div>
        <NavBar titulo = "nombreProyecto" subtitulo={subtitulo}/>

        {/*App-->Novedadees-->ContenedorComponents-->Titulo */}
        <Novedades/> 

        <Error>
          {/* puede llamar multiples tareas porque se va a contener dentro del modulo children */}
          <p>Hola, soy Children</p>
          
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo suscipit possimus, fugit expedita soluta dignissimos distinctio cupiditate repellendus. Suscipit asperiores quae placeat atque iusto maxime animi odio earum, saepe officiis!</p>
        </Error>

        
        </>
    )
    

    
}

export default App;