// import React from 'react'

// const navBar = () => {
//   return (
//     <div>
//         <h1>Luminati Decoracion</h1>
//         <button>Inicio</button>
//         <button>Tienda</button>
//         <button>Conocenos</button>
//         <button>Contactanos</button>
//         <button>Encontranos</button>
//     </div>
//   )
// }

const navBar = (props) => {
    console.log(props);
    let titulo = props.titulo
    return (  
      <div> 
          {/* {props.titulo} */}
          {titulo}
          {props.subtitulo}
      </div>
    )
  }

export default navBar




