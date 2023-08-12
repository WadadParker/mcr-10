import logo from './logo.svg';
import './App.css';

import {Route,Routes} from "react-router-dom";

import { Home } from './pages/home/Home';
import { SideBar } from './components/sideBar/SideBar';

function App() {
  return (
    <div className="App">
      <SideBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
