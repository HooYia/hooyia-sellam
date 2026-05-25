import { Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Contributors from './pages/Contributors'
import Products from './pages/Products'
import ProductDetails from './pages/ProductDetails'
import './index.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="cart" element={<Cart />} />
        <Route path="contributors" element={<Contributors />} />
        <Route path="products" element={<Products />} />
        <Route path="product/:id" element={<ProductDetails />} />
      </Route>
    </Routes>
  )
}

export default App
