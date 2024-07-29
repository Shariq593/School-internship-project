// src/pages/HomePage.jsx
import React from 'react';
import Header from '../components/Header';
import Carousel from '../components/Carousel';
import MissionSection from '../components/MissionSection';
import Events from '../components/Events';
import Info from '../components/Info';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div>
      <Header />
        <Carousel/>
        <Info/>
        <MissionSection/>
        <Events/>
        <Footer/>
    </div>
  );
};

export default HomePage;
