import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail';


const ItemDetailContainer = () => {


    const [products,setProducts] = useState([]);
  // busco la categoria, dentro del arreglo "listProd" para filtrar
  const {id} = useParams();


  useEffect(() => {
    const listProd =[
      {
        id:1,
        nombre:"deco1",
        categoria:"deco",
        precio:"$6251",
        img: <img className='images' src="img/deco1.png" alt="deco1" />
      },
      {
        id:2,
        nombre:"deco2",
        categoria:"deco",
        precio:"$6252",
        img: <img className='images' src="img/deco2.png" alt="deco2" />
      },
      {
        id:3,
        nombre:"deco3",
        categoria:"deco",
        precio:"$6253",
        img: <img className='images' src="img/deco3.png" alt="deco3" />
      },
      {
        id:4,
        nombre:"deco4",
        categoria:"deco",
        precio:"$6254",
        img: <img className='images' src="img/deco4.png" alt="deco4" />
      },
      {
        id:5,
        nombre:"deco5",
        categoria:"deco",
        precio:"$6255",
        img: <img className='images' src="img/deco5.png" alt="deco5" />
      },
      {
        id:6,
        nombre:"deco6",
        categoria:"deco",
        precio:"$6256",
        img: <img className='images' src="img/deco4.png" alt="deco4" />
      },
      {
        id:7,
        nombre:"deco7",
        categoria:"deco",
        precio:"$6257",
        img: <img className='images' src="img/deco2.png" alt="deco2" />
      },
      {
        id:8,
        nombre:"deco8",
        categoria:"deco",
        precio:"$6258",
        img: <img className='images' src="img/deco3.png" alt="deco3" />
      },
      {
        id:9,
        nombre:"escritorio1",
        categoria:"escritorios",
        precio:"$798",
        img: <img className='images' src="img/escritorio1.png" alt="escritorio1" />
      },
      {
        id:10,
        nombre:"escritorio2",
        categoria:"escritorios",
        precio:"$7180",
        img: <img className='images' src="img/escritorio2.png" alt="escritorio2" />
      },
      {
        id:11,
        nombre:"escritorio3",
        categoria:"escritorios",
        precio:"$7181",
        img: <img className='images' src="img/escritorio3.png" alt="escritorio3" />
      },
      {
        id:12,
        nombre:"escritorio4",
        categoria:"escritorios",
        precio:"$7182",
        img: <img className='images' src="img/escritorio4.png" alt="escritorio4" />
      },
      {
        id:13,
        nombre:"escritorio5",
        categoria:"escritorios",
        precio:"$7183",
        img: <img className='images' src="img/escritorio5.png" alt="escritorio5" />
      },
      {
        id:14,
        nombre:"escritorio6",
        categoria:"escritorios",
        precio:"$7184",
        img: <img className='images' src="img/escritorio4.png" alt="escritorio4" />
      },
      {
        id:15,
        nombre:"escritorio7",
        categoria:"escritorios",
        precio:"$7185",
        img: <img className='images' src="img/escritorio2.png" alt="escritorio2" />
      },
      {
        id:16,
        nombre:"escritorio8",
        categoria:"escritorios",
        precio:"$7185",
        img: <img className='images' src="img/escritorio3.png" alt="escritorio3" />
      },
      {
        id:17,
        nombre:"estante1",
        categoria:"estantes",
        precio:"$1765",
        img: <img className='images' src="img/estante1.png" alt="estante1" />
      },
      {
        id:18,
        nombre:"estante2",
        categoria:"estantes",
        precio:"$1765",
        img: <img className='images' src="img/estante2.png" alt="estante2" />
      },
      {
        id:19,
        nombre:"estante3",
        categoria:"estantes",
        precio:"$1765",
        img: <img className='images' src="img/estante3.png" alt="estante3" />
      },
      {
        id:20,
        nombre:"estante4",
        categoria:"estantes",
        precio:"$1765",
        img: <img className='images' src="img/estante4.png" alt="estante4" />
      },
      {
        id:21,
        nombre:"estante5",
        categoria:"estantes",
        precio:"$1765",
        img: <img className='images' src="img/estante5.png" alt="estante5" />
      },
      {
        id:22,
        nombre:"estante6",
        categoria:"estantes",
        precio:"$1765",
        img: <img className='images' src="img/estante4.png" alt="estante4" />
      },
      {
        id:23,
        nombre:"estante7",
        categoria:"estantes",
        precio:"$1765",
        img: <img className='images' src="img/estante2.png" alt="estante2" />
      },
      {
        id:24,
        nombre:"estante8",
        categoria:"estantes",
        precio:"$1765",
        img: <img className='images' src="img/estante3.png" alt="estante3" />
      }        
    ]

    const myPromise = new Promise((resolved,rejected) =>{
      setTimeout(() => {
        if (!id) {
          resolved(listProd)          
        }else{
          resolved(listProd.filter((prod) => prod.id === id));
        }
      }, 500)
    })

    myPromise.then((resolved) =>{
      setProducts(resolved);
    })
  },[id])


  return (
   <>
    <div className='container'>
      <div className='row'>
        <ItemDetail producto={products[id]}/>
      </div>
    </div>

    </>
  )
}

export default ItemDetailContainer