import React, { useState } from 'react'
import { useContextt } from './Context';
import { addDoc, collection, getFirestore, doc, updateDoc, getDoc } from "firebase/firestore";

const Checkout = () => {
    const {listProd,totalPrice, clear} = useContextt();

    const [idPedido, setIdPedido] = useState('');


    const [correo, setCorreo] = useState(""); 
    const [nombre, setNombre] = useState(""); 
    const [telefono, setTelefono] = useState("");
    const [provincia, setProvincia] = useState("");
    const [localidad, setLocalidad] = useState("");
    const [direccion, setDireccion] = useState("");
    const [inlineFormCustomSelectPref, setInlineFormCustomSelectPref] = useState("");
    const [mensaje, setMensaje] = useState("");


    function finalizar() {
        const pedido = { 
            buyer : {correo, nombre,telefono, provincia, localidad, direccion, mensaje}, 
            items: [{listProd}], 
            total: totalPrice()
        };
        console.log(pedido);
        const db = getFirestore();
        const refColection = collection(db,'pedidos')
        addDoc(refColection, pedido)
        .then((resolved) =>{
            setIdPedido(resolved.id);
            // actualizo stock(sin terminar)
            // let ped;
            // const productos= getFirestore();
            // const refProd = doc(productos, 'productos', idPedido)
            // getDoc(refProd)
            // .then((resolved) =>{
            //     ped = {
            //         id: resolved.id,
            //         ...resolved.data()
            //     }
            //     console.log("stock1= ",ped);
            //     const newStock = refProd.stock -1
            //     updateDoc(refProd, {stock: newStock})
            //     console.log("stock2= ",refProd.stock)                
            // })          
        })
    }       

    function cancelar(){
        console.log("vacie carrito");
        clear();
    }
    
    return (
        <>
            <div className='bloque'>
                <div class="col-12 col-md-8 col-lg-8 borde">
                    <h1>Completa tus datos</h1>
                    <p class="contacto-tamanio">
                        <label for="correo">Email:</label>
                        <input id="email" type="email" name="correo" value={correo} onChange = {(e) =>
                        setCorreo(e.target.value)}/> 
                    </p>
                    <p class="contacto-tamanio">
                        <label for="nombre">Nombre:</label>
                        <input id="nombre" type="text" name="nombre" value={nombre} onChange = {(e) =>
                        setNombre(e.target.value)}/> 
                    </p>                   
                    <p class="contacto-tamanio">
                        <label for="telefono">Telefono:</label>
                        <input id="telefono" type="text" name="telefono" value={telefono} onChange = {(e) =>
                        setTelefono(e.target.value)}/>  
                    </p> 
                    <p class="contacto-tamanio">
                        <label for="provincia">Provincia:</label>
                        <input id="provincia" type="text" name="provincia" value={provincia} onChange = {(e) =>
                        setProvincia(e.target.value)}/>  
                    </p> 
                    <p class="contacto-tamanio">
                        <label for="localidad">Localidad:</label>
                        <input id="localidad" type="text" name="localidad" value={localidad} onChange = {(e) =>
                        setLocalidad(e.target.value)}/>  
                    </p> 
                    <p class="contacto-tamanio">
                        <label for="Direccion">Direccion:</label>
                        <input id="direccion" type="text" name="direccion" value={direccion} onChange = {(e) =>
                        setDireccion(e.target.value)}/>  
                    </p>  
                    <p class="contacto-tamanio">   
                        <label class="my-1 mr-2" for="inlineFormCustomSelectPref">Forma de pago:</label>
                        <select class="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref" value={inlineFormCustomSelectPref} onChange = {(e) =>            
                        setInlineFormCustomSelectPref(e.target.value)}>
                        <option selected>Seleccione...</option>
                        <option value="Efectivo">Efectivo</option>
                        <option value="Transferencia">Transferencia</option>
                        </select>
                    </p>             
                    <p class="contacto-tamanio">
                        <label for="comentarios">Dejanos un comentario adicional:</label>
                        <textarea id="mensaje" name="mensaje" rows="4" cols="25" value={mensaje} onChange = {(e) =>
                        setMensaje(e.target.value)}></textarea>
                    </p>  
                    {/* <input type="submit" value="Finalizar Compra"/>
                    <input type="reset" value="Cancelar"/>  */}
                    <button className='cardButton' onClick={cancelar}>Vaciar carrito</button>
                    <button className='cardButton' onClick={finalizar}>Finalizar</button>

                    <h1>Guarda el siguiente nro de pedido para hacer el seguimiento</h1>
                    <p>{idPedido}</p>
                {/* fin borde */}
                </div>
                {/* fin bloque */}
            </div>

        </>
    )
}

export default Checkout