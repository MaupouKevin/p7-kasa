import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Housing from './pages/Housing';
import Error from './pages/Error';
import Header from './components/Header';
import GlobalStyle from './utils/style/GlobalStyle';
import Footer from './components/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <GlobalStyle />
      <Header />   
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/housing/:id" element={<Housing />} /> 
        <Route path="/abouts" element={<About />} />
        <Route path="*" element={<Error />} />
        <Route path="/404" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);
