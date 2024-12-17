import React from "react";
import AboutUsInfo from "../../Component/aboutus/AboutUsInfo";
import AboutUsImage from "../../Component/aboutus/AboutUsImage";
import Header from "../../Component/header/Header";
import Footer from "../../Component/footer/Footer";
import "./AboutUs.css";
const AboutUs = () => {
  return (
    <main className="AboutUs-parent-container">
      <Header />
      <div className="AboutUs-main-container">
        <AboutUsInfo />
        <AboutUsImage />
      </div>
      <Footer />
    </main>
  );
};

export default AboutUs;
