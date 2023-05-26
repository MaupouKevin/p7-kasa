import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Housing from "./pages/Housing/Housing";
import Error from "./pages/Error/Error";
import "./styles/index.scss";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/housing/:id" element={<Housing />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
        <Route path="/404" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);
