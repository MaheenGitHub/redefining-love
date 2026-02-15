import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import ReflectionCards from './components/ReflectionCards';
import InteractiveReflection from './components/InteractiveReflection';
import UrduPoetry from './components/UrduPoetry';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Hero />
      <About />
      <ReflectionCards />
      <InteractiveReflection />
      <UrduPoetry />
      <Footer />
    </div>
  );
}

export default App;
