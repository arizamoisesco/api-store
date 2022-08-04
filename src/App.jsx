import { useState } from 'react'
import { ProductCard } from './components/ProductCard/productCard'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Lista de productos</h1>
      <ProductCard title="Producto de prueba" price="12.000"/>
    </div>
  )
}

export default App
