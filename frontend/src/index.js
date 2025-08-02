import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './index.css';
import HomePage from './landing_pages/home/HomePage';
import Signup from './landing_pages/signup/Signup';
import Login from './landing_pages/login/Login';
import AboutPage from './landing_pages/about/AboutPage';
import Pricing from './landing_pages/pricing/Hero';
import ProductsPage from './landing_pages/products/ProductsPage';
// import Support from './landing_pages/support/SupportPage';
import Navbar from './landing_pages/Navbar';
import Footer from './landing_pages/Footer';
import NotFound from './landing_pages/NotFound';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<BrowserRouter>
  <Navbar/>
   <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/products" element={<ProductsPage />} />
      {/* <Route path="/support" element={<Support />} /> */}
      <Route path="/about" element={<AboutPage />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/*" element={<NotFound />} />  
   </Routes>
   <Footer/>
</BrowserRouter>
);


