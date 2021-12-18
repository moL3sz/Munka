import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import ShortDescription from './components/short_description';
import ImageViewer from './components/imageviewer';
import Marketing from './components/Marketing';
import Services from './components/Services';
import LearnMore from './components/LearnMore';
import Leading from './components/Leading';
import GrowYourBusiness from './components/GrowYourBusiness';
import Footer from './components/Footer';
export default function App(){
  return (

    <div className="">
      <Navbar/>
      <ShortDescription/>
      <ImageViewer/>  
      <Marketing/>
      <Services/>
      <LearnMore/>
      <Leading/>
      <GrowYourBusiness/>
      <Footer/>
    </div>
  );
};
