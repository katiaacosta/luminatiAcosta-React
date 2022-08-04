import { Link } from "react-router-dom";
import '../components/styles.css'


const Product = ({nombre,precio,img,id}) => {
    
    function detalle(){
        console.log("click ver detalle");        
    }
    return (
    <>
        <div>{img}</div>
        <div>{nombre} </div>
        <div className="itemDetails">
            <div className="precioProd">{precio}</div>
            <div className='cantidad'>
                <Link to ={ `/item/${id}`}>
                    <button className="cardButton" onClick={detalle}>Ver detalle</button>
                </Link>
            </div>
        </div>

    </>
    )
}

export default Product

