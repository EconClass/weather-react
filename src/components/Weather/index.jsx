import React, { useState, useEffect } from 'react';

const Weather = ({ loc }) => {
  // loc = loc || 'London,uk'
  const [weatherInfo, setWeatherInfo] = useState(null);

  useEffect(() => {
    async function getWeather() {
      // console.log(loc)
      const key = process.env.REACT_APP_API_KEY
      const base = "https://api.openweathermap.org/data/2.5/weather"
      const url = `${base}?q=${loc}&appid=${key}&units=imperial`

      try {
        const res = await fetch(url)
        const data = await res.json()
        console.log(data)
        setWeatherInfo(data)
      }
      catch (err) { console.log(err.message) }
    }
    getWeather(loc)
  }, [loc, setWeatherInfo])

  // console.log(weatherInfo)
  const { main, weather } = weatherInfo

  return (
    <div>
      <h1>{loc}</h1>
      <h3>{main}</h3>
      <h3>{weather[0].temp}</h3>
    </div>
  )
};

export default Weather;