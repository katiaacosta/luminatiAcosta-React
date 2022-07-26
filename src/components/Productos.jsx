import React from 'react'
import Card from './Card'
import './styles.css'

const Productos = () => {
  return (
    <>
    <div className='menu'>
        {/* card del producto */}
        <div className='tamCard'>
          {/* suma y resta cantidad de productos */}
          <Card producto= "Producto1" color="red"/>
        </div>

        <div className="tamCard">
          <Card producto= "Producto2" color="blue"/>
        </div> 

        <div className="tamCard">
          <Card producto= "Producto3" color="green"/>
        </div> 

        <div className="tamCard">
          <Card producto= "Producto4" color="purple" numero=""/>
        </div> 
    </div>
      

    </>
  )
}

export default Productos