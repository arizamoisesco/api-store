import { useState, useEffect } from 'react'
import axios from 'axios'
import { ProductCard } from '../ProductCard/productCard'

export const Products = () => {
    
    const [products, setProducts] = useState([])

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products').then((result)=>{
      setProducts(result.data)
      console.log(products)
    })
  }, [])

  return (
    <div className="App">
      <h1>Lista de productos</h1>
      {products && products.map( product => {
        return(
          <ProductCard 
          key={product.id}
          image={product.image}
          title={product.title} 
          price={product.price}/>
        )
      })}
      
    </div>
  )
}