import React from 'react';

import { AboutUs, Chef } from './container';
import  Navbar  from './components/navbar/Navbar';
import './App.css';


function App() {
  return (
    <div>
      <Navbar />
      <AboutUs />
      <Chef />
    </div>
  );
}

export default App;
