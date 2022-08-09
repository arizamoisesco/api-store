import {Products} from './components/Products/Products'
import {ProductDetail} from './components/ProductDetail/ProductDetail'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

function App() {
  return(
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Products/>}/>
          <Route path='/product/:id' element={<ProductDetail/>}/>
        </Routes>
      </Router>
      
    </>
    
  )
  
}

export default App
