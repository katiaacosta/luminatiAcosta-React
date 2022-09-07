import { useState, useEffect } from "react"

const Count = ({stock, nombre, onAdd}) => {
    const [contador, setContador] = useState(1);

    function minimo(){
        if (contador >= 1 ) {
            setContador(contador - 1)            
        }
    }

    function maximo(){
        if (contador <= stock) {
            setContador(contador +  1)            
        }       
    }


    useEffect(() => {        
    },[contador])

  return (
    <>
        <button className='cardButton' disabled={contador <= 1} onClick={minimo}>-</button>                
        <div className="spaceBetween">{contador}</div>
        <button className='cardButton' disabled={contador >= stock} onClick={maximo}>+</button>
        <div>
            <button className='cardButton' disabled={stock <= 0} onClick={() => onAdd(contador)}>Agregar al Carrito</button>
        </div>
    </>
  )
}

export default Count