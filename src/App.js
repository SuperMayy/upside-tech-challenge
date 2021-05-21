import React, { useState, useEffect } from "react";
import Input from './components/Input';
import Country from './components/Country';
import './App.css';

const App = () => {
  const [country, setCountry] = useState('United Kingdom of Great Britain and Northern Ireland');
  const [dropdown, setDropdown] = useState([]);

  const handleCountryInputChange = (e) => {
    setCountry(e.target.value);
    console.log(country);
  }

  const url = `https://restcountries.eu/rest/v2/name/${country}`; 

  useEffect(() => {
    getCountry(url);
  }, [url]);

  const getCountry = (url) => {
   fetch(url)
     .then(res => res.json())
     .then(data => {
      setDropdown(data);
       console.log(data);
      });
  }

  return (
    <div className="App">
      <Input country={country} handleCountryInputChange={handleCountryInputChange}/>
      <div className="drop-down-section">
        { dropdown.map(location => <Country name={location.name} key={location.numericCode}/>)}
      </div>
    </div>
  );
}

export default App;
