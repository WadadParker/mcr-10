import logo from './logo.svg';
import './App.css';

import {Route,Routes} from "react-router-dom";

import { Home } from './pages/home/Home';
import { SideBar } from './components/sideBar/SideBar';
import {Department} from "./pages/departments/Department";
import {Products} from "./pages/products/Products";
import { ProductPage } from './pages/productPage/ProductPage';

function App() {
  return (
    <div className="App">
      <SideBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/departments" element={<Department />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:productID" element={<ProductPage />} />
      </Routes>
    </div>
  );
}

export default App;
