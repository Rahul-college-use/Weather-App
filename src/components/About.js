import React from 'react';
import './About.css';

function About() {
  return (
    <section className="about" id="about">
      <h2>About WeatherNow ☁️</h2>
      <p>
        WeatherNow is a sleek and responsive weather application built with ReactJS.
        It allows you to search for real-time weather information by city name using the OpenWeatherMap API.
      </p>
      <ul>
        <li>🔍 Search for any city's weather instantly</li>
        <li>🌤 See temperature, condition, wind speed</li>
        <li>📱 Fully responsive with modern UI and glassmorphism design</li>
        <li>⚡ Fast and animated user experience</li>
      </ul>
      <p>
        This app is ideal for users who want quick, clean, and beautiful weather updates
        right at their fingertips.
      </p>
    </section>
  );
}

export default About;
