// import React from 'react'
import Count from "./Count"
import { Link } from "react-router-dom";


const Product = ({nombre,precio,img,id}) => {
    
    function detalle(){
        console.log("click ver detalle");        
    }
    return (
    <>
        <div>{img}</div>
        <div className='tituloProd'>{nombre} </div>
        <div className="itemDetails">
            <div className="precioProd">{precio}</div>
            <div className='cantidad'>
                <Link to ={ `/item/id/${id}`} className = 'cardButton'>Ver detalle</Link>
            </div>
        </div>

    </>
    )
}

export default Product

