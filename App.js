import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Current from './components/current';
import Forecast from './components/Forecast';
import '../node_modules/bootstrap/dist/js/bootstrap';

function App() {
  const [City, setCity] = useState();
  const [ClickedCity, setClickedCity] = useState();
  const [CitySuggestion, setCitySuggesion] = useState([]);//multiple objects->storing in empty array 

  const[currentWeather, setCurrentWeather]=useState();
  const[forecastWeather, setForecastWeather]=useState();
  const[location, setLocationWeather]=useState();
  

  const AutoCompleteURL = 'https://api.weatherapi.com/v1/search.json?key=83c0b17cb2774eac95723527231501&q=';
  
  const WeatherURL =(City)=> `https://api.weatherapi.com/v1/forecast.json?key=83c0b17cb2774eac95723527231501&q=${City}&days=7&aqi=no&alerts=no`

  const FetchAutoCompleteAPI = async () => {
    if (City) {
      try {
        const response = await axios.get(AutoCompleteURL + City);
        const resp = response.data;
        console.log('API CALL', resp);
        const CityData = resp.map((data) => {//destructuring the data-can create seperate array of the needed elements sing map fn
          return `${data.name}, ${data.region},${data.country}`//dynamically pasting a string inside a string -> template literals
        });
        setCitySuggesion(CityData);
      } catch (e) {
        console.log('Error fetching data:', e);
      }
    }
  };

  const handleSelectedCity=(City)=>{
    console.log('Clicked City',City);
    setClickedCity(City);
    FetchWeatherAPI(City);
    setCitySuggesion([]);
  };

  const FetchWeatherAPI= async (City)=>{
    try{
      const response=await axios.get(WeatherURL(City));
      const resp=response.data;
      console.log(resp);
      setCurrentWeather(resp.current);
      setForecastWeather(resp.forecast);
      setLocationWeather(resp.location);
      console.log('Current',resp.current);
      console.log('Forecast',resp.forecast);
      console.log('Location',resp.location);
    }catch(e){
      console.log('weather API error',e);
    }
    
  };

  useEffect(() => {
    if (City && City.length > 3) {//to avoid unnecessary api- improvement 1 if cond + 2 length
      FetchAutoCompleteAPI();
    }
  }, [City]);

  return (
    <div className='bg-primary'>
    <div className="container bg-primary p-5 rounded mt-5">
      <input
        type='text'
        value={ClickedCity}
        placeholder='Enter city'
        className='form-control'
        onChange={(e) => { 
          setCity(e.target.value); 
          if(e.target.value == ''){
            setCurrentWeather();
            setForecastWeather();
            setLocationWeather();
            setClickedCity();
          }
        }}
      />
      {/* {City && <h4>{City}</h4>} */}
      {CitySuggestion && CitySuggestion.map((data) => {//displaying the array using map 
        return <div className='text-center bg-dark rounded p-1 
        bg-opacity-10 border-dark border-opacity-25 text-white mt-2 ' 
        style={{cursor:'pointer'}}
//if user clicked execute this fn, take the dat
        onClick={()=>handleSelectedCity(data)}>
        {data}</div>
      })}

{currentWeather && <Current currentWeather={currentWeather} location={location} />}
{forecastWeather && <Forecast forecastWeather={forecastWeather} location={location}/>}
    </div></div>
  );
}

export default App;
