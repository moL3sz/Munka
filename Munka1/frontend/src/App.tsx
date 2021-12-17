import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar } from './comnponents/Navbar';
import { Intro } from './comnponents/Intro';
import { Images } from './comnponents/Images';
import { Working } from './comnponents/Working';
import { About } from './comnponents/About';
import { Projects } from './comnponents/Projects';
import { MoreProjects } from './comnponents/MoreProjects';
import { Trends } from './comnponents/Trends';
import { Footbar } from './comnponents/Footbar';

function App() {
  return (
    <div>
      <Navbar/>
      <Intro/>
      <Images/>
      <Working/>
      <About/>
      <Projects/>
      <Trends/>
      <Footbar/>

    </div>
  );
}

export default App;
