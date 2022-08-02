import { useState, useEffect } from "react"


const Count = ({nombre}) => {
    const [numero, setNumero] = useState(0);

    function minimo(){
        setNumero(numero - 1)
    }

    function maximo(){
        setNumero(numero +  1)
        console.log(`agregando ${nombre} al carrito...`);

        setTimeout(() => {
            console.log(`${nombre} agregado exitosamente!`);
            
        }, 1000);
    }

    useEffect(() => {
        if (numero === 9) {
            console.log("Ultima unidad disponible");
        }
    },[numero])


  return (
    <>
        <button className='cardButton' disabled={numero===0} onClick={minimo}>Quitar</button>                
        <div className="spaceBetween">{numero}</div>
        <button className='cardButton' disabled={numero===10} onClick={maximo}>Agregar</button>
    </>
  )
}

export default Count