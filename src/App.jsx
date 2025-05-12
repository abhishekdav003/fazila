import {Routes, Route} from 'react-router-dom'
import Home from "./pages/Home";
import About from './pages/About';
import Product from './pages/Product';
import Sustainability from './pages/Sustainability';
import Contact from './pages/Contact';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/product" element={<Product />} />
      <Route path="/sustainability" element={<Sustainability />} />
      <Route path="/contact" element={ <Contact/>} />

      
    </Routes>
  )
}

export default App;