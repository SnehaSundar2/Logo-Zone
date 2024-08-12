import React from 'react';
import Header from './components/Headers'
import Hero from './components/Hero';
import Features from './components/Features';
import Customization from './components/Customization';
import Showcase from './components/Showcase';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Features />
      <Customization />
      <Showcase />
      <Footer />
    </div>
  );
}

export default App;