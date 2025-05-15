import {Routes, Route} from 'react-router-dom'
import Home from "./pages/Home";
import About from './pages/About';
import Product from './pages/Product';
import Sustainability from './pages/Sustainability';
import Contact from './pages/Contact';
import ProductPage from './pages/Product';
import Infrastructure from './pages/Infrastructure';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />

      <Route path="/about" element={<About />} />
      <Route path="/product" element={<ProductPage />} />
      <Route path="/sustainability" element={<Sustainability />} />
      <Route path="/contact" element={ <Contact/>} />
      <Route path="/infrastructure" element={ <Infrastructure/>} />

      
    </Routes>
  )
}

export default App;