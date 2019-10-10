import React, { useState, useEffect } from 'react';
import Weather from './components/Weather'
import './App.css';


function App() {
  const [location, setLocation] = useState('');
  const [weatherInfo, setWeatherInfo] = useState(null);

  useEffect(() => {
    async function getWeather(loc) {
      const key = process.env.REACT_APP_API_KEY
      const base = "https://api.openweathermap.org/data/2.5/weather"
      const url = `${base}?q=${loc}&appid=${key}&units=imperial`

      try {
        const res = await fetch(url)
        const data = await res.json()
        setWeatherInfo(data)
      }
      catch (err) { console.log(err.message) }
    }
    getWeather(location)
  }, [location, setWeatherInfo])

  return (
    <div className="App">
      <header className="App-header">
        <form >
          <input
            type="text"
            placeholder="Enter the name of a city."
          />
          <button
            type="submit"
            onSubmit={e => {
              setLocation(e.target.value)
            }}
          >Submit</button>
        </form>
        {location ? <Weather name={location} data={weatherInfo} /> : null}
      </header>
    </div>
  );
}

export default App;
