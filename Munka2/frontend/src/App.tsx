import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header';
import Aos from "aos"
import "aos/dist/aos.css"
import { About } from './components/About';
import { Services } from './components/Services';
import { AboutTitle } from './components/AboutTitle';
import { Team } from './components/Team';
import { Projects } from './components/Projects';
import { ProjectsTitle } from './components/ProjectsTitle';





export default function App() {

  return (

   

    <div className="app">
      <Header/>
      <AboutTitle/>
      <About/>
      <Services/>
      <Team/>
      <ProjectsTitle/>
      <Projects/>


    </div>

    

  );
}