import React, { useState } from 'react';
import Weather from './components/Weather'
import './App.css';

function getWeather(loc) {
  const key = process.env.REACT_APP_API_KEY
  const base = "https://api.openweathermap.org/data/2.5/weather"
  const url = `${base}?q=${loc}&units=imperial&appid=${key}`

  let body = null;

  fetch(url)
    .then(res => res.json())
    .then(data => { body = data })
    .catch(err => console.log(err.message))

  return body
}


function App() {
  const [location, setLocation] = useState('');
  const [weatherInfo, setWeatherInfo] = useState(getWeather('London,uk'));
  const { name } = weatherInfo;
  return (
    <div className="App">
      <header className="App-header">
        <Weather name={name} />
        <h1>{location}</h1>
        <form onSubmit={e => {
          setWeatherInfo(getWeather(location))
          console.log(weatherInfo)
        }}>
          <input
            value={location}
            onChange={e => {
              setLocation(e.target.value)
            }}
            type="text"
            placeholder="Enter the name of a city."
          />
          <button type="submit">Submit</button>
        </form>
      </header>
    </div>
  );
}

export default App;
