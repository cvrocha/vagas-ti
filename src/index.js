import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, Routes, BrowserRouter} from "react-router-dom";
import './assets/css/index.css';
import Home from './pages/home.jsx';
import ViUmaVaga from './pages/vagasprajr.jsx';
import VagasPraJR from './pages/vagasprajr.jsx';
import TechClaudia from './pages/tech_claudia.jsx';
import VMRecruiter from './pages/vmnitrecruiter';
import Menu from './components/menu.js'
import Footer from './components/footer'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Menu/>
    <BrowserRouter>        
        <Routes>
            <Route path="/" element={<Home />}  />
            <Route path="/viumavaga" element={<ViUmaVaga />}  />
            <Route path="/vagasprajr" element={<VagasPraJR />}  />
            <Route path="/techclaudia" element={<TechClaudia />}  />
            <Route path="/vmnitrecruiter" element={<VMRecruiter />}  />
        </Routes>
    </BrowserRouter>
  <Footer/>
  </React.StrictMode>
);
