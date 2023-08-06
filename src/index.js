import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, Routes, BrowserRouter} from "react-router-dom";
import './assets/css/index.css';
import Home from './pages/home.jsx';
import Menu from './components/menu.js'
import Footer from './components/footer'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Menu/>
    <BrowserRouter>        
        <Routes>
            <Route path="/" element={<Home />}  />
        </Routes>
    </BrowserRouter>
  <Footer/>
  </React.StrictMode>
);
