import React from "react";
import Header from "./Component/header/Header";
import Footer from "./Component/footer/Footer";
import Hero from "./Component/content/Hero";
import Home from "./pages/Home";
import AboutUs from "./pages/about/AboutUs";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AboutUs" element={<AboutUs />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
