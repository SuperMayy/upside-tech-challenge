import React, { useState, useEffect } from "react";
import Input from './components/Input';
import Country from './components/Country';
import './App.css';

const App = () => {
  const [country, setCountry] = useState('United Kingdom of Great Britain and Northern Ireland');
  const [dropdown, setDropdown] = useState([]);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

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
     .then(res => {
       if(!res.ok){
         throw Error('Country does not exist please try again.');
       }
       return res.json();
      })
     .then(data => {
      setDropdown(data);
      setIsPending(false);
      })
      .catch(err => {
        console.log(`Error: ${err.message}`);
        setError(err.message)
      }); 
  }

  const fillInputField = (fullCountry) => {
    setCountry(fullCountry);
  }

  return (
    <div className="App">
      {error && <h1 className="error-message">{error}</h1> }
      <Input country={country} handleCountryInputChange={handleCountryInputChange}/>
      <div className="drop-down-section">
        {isPending ? <Country name="loading" fillInputFunction={()=>console.log("loading")}/> 
        : dropdown.map(location => {
        return <Country name={location.name} 
        key={location.numericCode} 
        fillInputFunction={() => fillInputField(location.name)}
        />})}
      </div>
    </div>
  );
}

export default App;
