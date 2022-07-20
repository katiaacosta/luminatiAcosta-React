import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

// function App() {
  // const [count, setCount] = useState(0) 


  // agrego
  // const condition = true
  // let resultado = null

  // resultado = condition ? "El resultado es correcto" : "el resultado no es correcto"
  // console.log(`Voy a imprimir: ${resultado}`);
  // fin agrego

  // return (
  //   <div className="App">
  //     <div>
  //       <a href="https://vitejs.dev" target="_blank">
  //         <img src="/vite.svg" className="logo" alt="Vite logo" />
  //       </a>
  //       <a href="https://reactjs.org" target="_blank">
  //         <img src={reactLogo} className="logo react" alt="React logo" />
  //       </a>
  //     </div>
  //     <h1>Vite + React</h1>
  //     <div className="card">
  //       <button onClick={() => setCount((count) => count + 1)}>
  //         count is {count}
  //       </button>
  //       <p>
  //         Edit <code>src/App.jsx</code> and save to test HMR
  //       </p>
  //     </div>
  //     <p className="read-the-docs">
  //       Click on the Vite and React logos to learn more
  //     </p>
  //   </div>
  // )


  // agrego
//   return (
//     // tengo que devolver un unico div, asi que uso uno contenedor y muchos adentro de ser necesario
    
//     <>  {/* div contenedor */}      
//       {/* primer div */}
//       <div className="App">
//         <div>Hola</div>
//         <input />
//       </div>
//       {/* segundo div */}
//       <div>
//         <label htmlFor=''>Hola otra vez</label>
//       </div>
//     </>
//   )
//   // fin agrego
// }

// export default App


// import './App.css';
import NavBar from "./components/navbar/NavBar"

function App() {

    return (

        <>
        <NavBar/>
        
        </>
    )
    

    
}

export default App;