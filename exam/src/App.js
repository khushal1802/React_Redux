
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './componant/Home.jsx'
import Product from './componant/Product.jsx';
import Navbar from './componant/Navbar.jsx';

function App() {

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/product" element={<Product />}></Route>
      </Routes>
    </div>
  );
}

export default App;
