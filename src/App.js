import React, { useState } from 'react';
import Weather from './components/Weather'
import './App.css';


function App() {
  const [inputValue, setValue] = useState('');
  const [location, setLocation] = useState(inputValue);

  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={(e) => {
          e.preventDefault();
          setLocation(inputValue);
          console.log("Input:", inputValue)
          console.log("Location:", location)
        }}>
          <input
            type="text"
            placeholder="Enter the name of a city."
            value={inputValue}
            onChange={e => {
              setValue(e.target.value)
              console.log(inputValue)
            }}
          />
        </form>

        {location !== '' ? <Weather loc={location} /> : null}
      </header>
    </div>
  );
}

export default App;
