// import React from 'react'

import ContenedorComponents from "./ContenedorComponents";

// import ContenedorComponents from "../ContenedorComponents";
const Novedades = () => {
    const saludar = () => {
        console.log("Hola, soy la funcion saludar definida en Novedades, ejecutandola en ContenedorComponents");
    }


    return (
        <>
            <div>Esto es una seccion de Novedades</div>
            <ContenedorComponents titulo = "Titulo1" descripcion ="primero" saludo= {saludar}/>
            {/* <ContenedorComponents titulo = "Titulo2" descripcion ="segundo"/>
            <ContenedorComponents titulo = "Titulo3" descripcion ="tercero"/>
            <ContenedorComponents titulo = "Titulo4" descripcion ="cuarto"/> */}
            {/* <ContenedorComponents />
            <ContenedorComponents />
            <ContenedorComponents />
            <ContenedorComponents /> */}
        </>
    )
}





export default Novedades 