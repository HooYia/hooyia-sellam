import { Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Contributors from './pages/Contributors'
import './index.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="cart" element={<Cart />} />
        <Route path="contributors" element={<Contributors />} />
      </Route>
    </Routes>
  )
}

export default App
