import React from 'react';

import { AboutUs, Chef, Header,  FindUs, Footer, Gallery, Intro, Laurels, SpecialMenu } from './container';
import  Navbar  from './components/navbar/Navbar';
import './App.css';


function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <AboutUs />
      <SpecialMenu />
      <Chef />
      <Intro />
      <Laurels />
      <Gallery />
      <FindUs />
      <Footer />
    </div>
  );
}

export default App;
