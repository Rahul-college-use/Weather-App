import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./weather_body.css";

function WeatherBody() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');
  const [recentSearches, setRecentSearches] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  const apiKey = "e20ce57febaac0f9fcdcf442c5fbd38b";

  // Load recent searches from localStorage
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("recentWeatherSearches"));
    if (saved) setRecentSearches(saved);
  }, []);

  // Save recent searches to localStorage
  useEffect(() => {
    localStorage.setItem("recentWeatherSearches", JSON.stringify(recentSearches));
  }, [recentSearches]);

  const fetchWeather = async (cityName = city) => {
    if (!cityName) {
      setError("Please enter a city name.");
      return;
    }

    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`
      );
      setWeather(response.data);
      setError('');
      setCity('');

      if (!recentSearches.includes(cityName)) {
        const updated = [cityName, ...recentSearches].slice(0, 5);
        setRecentSearches(updated);
      }
    } catch (err) {
      setError("City not found. Please try again.");
      setWeather(null);
    }
  };

  return (
    <div className={`weather ${darkMode ? "dark-mode" : "light-mode"}`} id='weather'>
      <div className="blur-div">
        {/* Theme Toggle */}
        <div style={{ textAlign: "right", marginBottom: "10px" }}>
          <button onClick={() => setDarkMode(!darkMode)} className='toggleBtn' >
            {darkMode ? "🌞 Light Mode" : "🌙 Dark Mode"}
          </button>
        </div>

        <h2>Weather Search ⛅</h2>
        <p>Enter a city to get weather info:</p>

        {/* Input Field */}
        <div className="input">
          <input
            type="text"
            placeholder="e.g. Delhi"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && fetchWeather()}
          />
          <button onClick={() => fetchWeather()}>Search</button>
        </div>

        {/* Recent Searches */}
        {recentSearches.length > 0 && (
          <div className="recent">
            <p>Recent:</p>
            <ul>
              {recentSearches.map((item, idx) => (
                <li style={{textTransform:"capitalize"}} key={idx} onClick={() => fetchWeather(item)}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Result Display */}
        <div className="result">
          {error && <p style={{ color: 'red' }}>{error}</p>}
          {weather && (
            <div className="weather-info">
              <h3>{weather.name}, {weather.sys.country}</h3>
              <img
                src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                alt="weather icon"
              />
              <p>🌡 Temperature: {weather.main.temp}°C</p>
              <p>🌥 Condition: {weather.weather[0].description}</p>
              <p>💨 Wind: {weather.wind.speed} m/s</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default WeatherBody;
