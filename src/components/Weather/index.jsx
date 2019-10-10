import React from 'react';

const Weather = ({ name, data }) => {
  console.log(data)
  const { main, weather } = data
  return (
    <div>
      <h1>{name}</h1>
      <h3>{main}</h3>
      <h3>{weather[0].temp}</h3>
    </div>
  )
};

export default Weather;