import React from 'react';
import './App.css';

import Hero from './sections/Hero/Hero';
import Services from './sections/Services/Services';
import About from './sections/About/About';
import Clients from './sections/Clients/Clients';
import Footer from './sections/Contact/Contact';
import Header from './components/Header/Header';


function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Services />
      <About />
      <Clients />
      <Footer />
    </div>
  );
}

export default App;
