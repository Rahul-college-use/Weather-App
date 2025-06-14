import React from 'react';
import Navbar from './components/Navbar';
import WeatherBody from './components/Weather';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <div style={{ background: "black" }}>
        <Navbar />
        <WeatherBody />
        <About />
        <Footer/>

      </div>

    </>
  );
}

export default App;
