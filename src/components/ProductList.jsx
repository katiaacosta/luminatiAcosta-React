import React from 'react'
import Product from './Product'

const ProductList = ({products}) => {

    return (
        <>
            <div className='prod'>
                {products.map((item) => (
                    <div className='col-12 col-md-6 col-lg-3 prodList'>
                    <Product key={item.id} nombre={item.nombre} precio={item.precio} img={item.img}/>
                    </div>
                    )
                    )}
            </div>

        </>
    )
}

export default ProductList