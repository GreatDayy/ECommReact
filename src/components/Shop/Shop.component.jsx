import { useState, useContext } from 'react'
import { ProductsContext } from '../../contexts/products.context';
import ProductCard from '../product-card/product-card.component';
import './Shop.styles.scss'

const Shop = () => {
  const {products} = useContext(ProductsContext);
  console.log(products)
  return (
    <div className='Product-card-container'>
        {
            products.map((product) => (
                <div key={product.id}>
                   <ProductCard product={product}/>
                 </div>
            ))
        }
        
    </div>
  )
}

export default  Shop 
 