import React, { useRef, useState } from 'react'
import { useContextt } from './Context';
import { addDoc, collection, getFirestore, doc, updateDoc, getDoc } from "firebase/firestore";
import { Link } from 'react-router-dom';

const Checkout = () => {
    const { listProd, totalPrice, clear } = useContextt();

    const [idPedido, setIdPedido] = useState('');

    const [compraConfirmada, setCompraConfirmada] = useState(false)
    const [dataRejected, setDataRejected] = useState(false);

    const [correo, setCorreo] = useState(""); 
    const [nombre, setNombre] = useState(""); 
    const [telefono, setTelefono] = useState("");
    const [provincia, setProvincia] = useState("");
    const [localidad, setLocalidad] = useState("");
    const [direccion, setDireccion] = useState("");
    const [inlineFormCustomSelectPref, setInlineFormCustomSelectPref] = useState("");
    const [mensaje, setMensaje] = useState("");

    const db = getFirestore();
    const refColection = collection(db,'pedidos')
    const pedido = { 
        buyer : {
            correo: correo,
            nombre: nombre,
            telefono: telefono,
            provincia: provincia,
            localidad: localidad,
            direccion: direccion,
            mensaje: mensaje
        }, 
        items: listProd.map(producto => ({
            id: producto.id,
            nombre: producto.nombre,
            categoria: producto.categoria,
            descripcion: producto.descripcion,
            precio: producto.precio,
            cantidad: producto.quantity,
            total: producto.quantity * producto.precio
        })),
        total: totalPrice(),
    };

    let refcorreo = useRef();
    let refnombre = useRef();
    let reftelefono = useRef();
    let refprovincia = useRef();
    let reflocalidad = useRef();
    let refdireccion = useRef();
    let refinlineFormCustomSelectPref = useRef();
    let refmensaje = useRef();
    
    const finalizar = () => {
        addDoc(refColection, pedido)
        .then((resolved) =>{
            setIdPedido(resolved.id);         
        })
        .catch((error) =>{
            console.log(error)
        })
        .finally(() => {
            setCompraConfirmada(true)
        })

        listProd.forEach((prod) => {
            const refprod = doc(db,'productos', prod.id)
            updateDoc(refprod, {
                stock: prod.stock - prod.quantity,
            })
            
        });
    }       

    function cancelar(){
        clear();
    }

   const validoDatos = (e) => {
    e.preventDefault();

    if (correo === ""){
        refcorreo.current.focus();
        setDataRejected(true)        
    } else if (nombre === "") {
        refnombre.current.focus();
        setDataRejected(true)
    } else if (telefono === "") {
        reftelefono.current.focus();
        setDataRejected(true)
    } else if (provincia === "") {
        refprovincia.current.focus();
        setDataRejected(true)
    } else if (localidad === "") {
        reflocalidad.current.focus();
        setDataRejected(true)
    } else if (direccion === "") {
        refdireccion.current.focus();
        setDataRejected(true)
    } else if (refinlineFormCustomSelectPref === "") {
        refinlineFormCustomSelectPref.current.focus();
        setDataRejected(true)
    } else if (mensaje === "") {
        refmensaje.current.focus();
        setDataRejected(true)
    } else {
        finalizar();
        setDataRejected(false)
    }

   }
    
    return (
        <>
            { compraConfirmada ?
                <div className='bloque'>
                    <div className='col-12 col-md-8 col-lg-8 borde'>
                        <p>Felicitaciones, tu compra se ha hecho con éxito. Guarda el siguiente numero de pedido para hacer el seguimiento :</p>
                        <p><strong>{idPedido}</strong></p>
                        <Link to='/'>
                            <button className='cardButton' onClick={cancelar}>Cerrar</button>
                        </Link>                        
                    </div>
                </div>
            :
                <div className='bloque'>
                    <form className='col-12 col-md-8 col-lg-8 borde' onSubmit={validoDatos}>
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
                        <Link to='/'><button className='cardButton' onClick={cancelar}>Cancelar</button></Link>                        
                        <button className='cardButton' type="submit">Finalizar</button>                       
                    </form>
                </div>
            }

        </>
    )
}

export default Checkout