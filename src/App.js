import logo from './logo.svg';
import './App.css';
import AllCountries from './Components/AllCountries';
import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DetailCountry from './Components/DetailCountry';

function App() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/all`)
      .then(response => response.json())
      .then(data => {
        const countriesData = data.hasOwnProperty('data') ? data.data : data;
        setCountries(countriesData);
        setLoading(false); // Set loading to false after data is fetched
      })
      .catch(err => {
        console.log(err);
        setLoading(false); // Set loading to false in case of an error
      });
  }, []);

  // Conditional rendering based on the loading state
  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AllCountries countriesList={countries} />} />
        <Route path='/detail/:country' element={<DetailCountry countriesList={countries} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
