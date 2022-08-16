import { useState, useEffect } from "react"

const Count = ({nombre,onAdd}) => {
    const [contador, setContador] = useState(0);

    function minimo(){
        setContador(contador - 1)
    }

    function maximo(){
        setContador(contador +  1)
        console.log(`agregando ${nombre} al carrito...`);

        setTimeout(() => {
            console.log(`${nombre} agregado exitosamente!`);
            
        }, 1000);
    }

    useEffect(() => {
        if (contador === 9) {
            console.log("Ultima unidad disponible");
        }
    },[contador])

    useEffect(() => {        
    },[contador])



  return (
    <>
        <button className='cardButton' disabled={contador===0} onClick={minimo}>-</button>                
        <div className="spaceBetween">{contador}</div>
        <button className='cardButton' disabled={contador===10} onClick={maximo}>+</button>
        <div>
            <button className='cardButton' onClick={() => onAdd(contador)}>Agregar al Carrito</button>
        </div>
    </>
  )
}

export default Count