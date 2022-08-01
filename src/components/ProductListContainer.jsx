import React, { useEffect, useState } from 'react'
import ProductList from './ProductList'



const ProductListContainer = () => {

  const [products,setProducts] = useState([])

  useEffect(() => {
    const listProd =[
      {
        id:1,
        nombre:"deco1",
        descripcion:"Descripcion1",
        precio:"$6251",
        img: <img className='images' src="img/deco1.png" alt="deco1" />
      },
      {
        id:2,
        nombre:"deco2",
        descripcion:"Descripcion2",
        precio:"$6252",
        img: <img className='images' src="img/deco2.png" alt="deco2" />
      },
      {
        id:3,
        nombre:"deco3",
        descripcion:"Descripcion3",
        precio:"$6253",
        img: <img className='images' src="img/deco3.png" alt="deco3" />
      },
      {
        id:4,
        nombre:"deco4",
        descripcion:"Descripcion4",
        precio:"$6254",
        img: <img className='images' src="img/deco4.png" alt="deco4" />
      },
      {
        id:5,
        nombre:"deco5",
        descripcion:"Descripcion5",
        precio:"$6255",
        img: <img className='images' src="img/deco5.png" alt="deco5" />
      },
      {
        id:6,
        nombre:"deco6",
        descripcion:"Descripcion6",
        precio:"$6256",
        img: <img className='images' src="img/deco4.png" alt="deco4" />
      },
      {
        id:7,
        nombre:"deco7",
        descripcion:"Descripcion7",
        precio:"$6257",
        img: <img className='images' src="img/deco2.png" alt="deco2" />
      },
      {
        id:8,
        nombre:"deco8",
        descripcion:"Descripcion8",
        precio:"$6258",
        img: <img className='images' src="img/deco3.png" alt="deco3" />
      },
      {
        id:9,
        nombre:"escritorio1",
        descripcion:"Descripcion1",
        precio:"$798",
        img: <img className='images' src="img/escritorio1.png" alt="escritorio1" />
      },
      {
        id:10,
        nombre:"escritorio2",
        descripcion:"Descripcion2",
        precio:"$7180",
        img: <img className='images' src="img/escritorio2.png" alt="escritorio2" />
      },
      {
        id:11,
        nombre:"escritorio3",
        descripcion:"Descripcion3",
        precio:"$7181",
        img: <img className='images' src="img/escritorio3.png" alt="escritorio3" />
      },
      {
        id:12,
        nombre:"escritorio4",
        descripcion:"Descripcion4",
        precio:"$7182",
        img: <img className='images' src="img/escritorio4.png" alt="escritorio4" />
      },
      {
        id:13,
        nombre:"escritorio5",
        descripcion:"Descripcion5",
        precio:"$7183",
        img: <img className='images' src="img/escritorio5.png" alt="escritorio5" />
      },
      {
        id:14,
        nombre:"escritorio6",
        descripcion:"Descripcion6",
        precio:"$7184",
        img: <img className='images' src="img/escritorio4.png" alt="escritorio4" />
      },
      {
        id:15,
        nombre:"escritorio7",
        descripcion:"Descripcion7",
        precio:"$7185",
        img: <img className='images' src="img/escritorio2.png" alt="escritorio2" />
      },
      {
        id:16,
        nombre:"escritorio8",
        descripcion:"Descripcion8",
        precio:"$7185",
        img: <img className='images' src="img/escritorio3.png" alt="escritorio3" />
      },
      {
        id:17,
        nombre:"estante1",
        descripcion:"Descripcion1",
        precio:"$1765",
        img: <img className='images' src="img/estante1.png" alt="estante1" />
      },
      {
        id:18,
        nombre:"estante2",
        descripcion:"Descripcion2",
        precio:"$1765",
        img: <img className='images' src="img/estante2.png" alt="estante2" />
      },
      {
        id:19,
        nombre:"estante3",
        descripcion:"Descripcion3",
        precio:"$1765",
        img: <img className='images' src="img/estante3.png" alt="estante3" />
      },
      {
        id:20,
        nombre:"estante4",
        descripcion:"Descripcion4",
        precio:"$1765",
        img: <img className='images' src="img/estante4.png" alt="estante4" />
      },
      {
        id:21,
        nombre:"estante5",
        descripcion:"Descripcion5",
        precio:"$1765",
        img: <img className='images' src="img/estante5.png" alt="estante5" />
      },
      {
        id:22,
        nombre:"estante6",
        descripcion:"Descripcion6",
        precio:"$1765",
        img: <img className='images' src="img/estante4.png" alt="estante4" />
      },
      {
        id:23,
        nombre:"estante7",
        descripcion:"Descripcion7",
        precio:"$1765",
        img: <img className='images' src="img/estante2.png" alt="estante2" />
      },
      {
        id:24,
        nombre:"estante8",
        descripcion:"Descripcion8",
        precio:"$1765",
        img: <img className='images' src="img/estante3.png" alt="estante3" />
      }        
    ]

    const myPromise = new Promise((resolved,rejected) =>{
      setTimeout(() => {
        resolved(listProd)
      }, 2000)
    })

    myPromise.then((resolved) =>{
      setProducts(resolved);
    })
  },[])

  return (
    <>
    <div className='container'>
      <div className='row'>
        <ProductList products={products} />
      </div>
    </div>

    </>
  )
}

export default ProductListContainer