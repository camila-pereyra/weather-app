import "./Container.css"
import CurrentWeather from "../CurrentWeather/CurrentWeather"
import CurrentWeatherReport from "../CurrentWeatherReport/CurrentWeatherReport"
import ExtendedForecast from "../ExtendedForecast/ExtendedForecast"
import { useState } from "react"
import ListCity from "../ListCity/ListCity"
import {FaSearchLocation} from "react-icons/fa";

const Container = () => {
  const [input,setInput]=useState("")
  const [cities,setCities]=useState([])
  const API_URL=`http://api.openweathermap.org/geo/1.0/direct?q=${input}&limit=5&appid=e6d11dfe03e86bfc3c6388c5b53db4e9`

   const onChange = (e)=>{
    setInput(e.target.value);
   }

   const handleClick = (e)=>{
    e.preventDefault();
    if(input!=="" ){
      fetch(API_URL).then(response=>response.json())
      .then(data=> { setCities(data)})
    }
    setInput("")
  }
  const onClickCity = (lat,lon)=>{
    console.log(lat,lon);
  }
    

  return (
    <>
    <div className="container">
      <div className="containerInput">
        <input type="text" name="nameCity" id="nameCity" placeholder="Enter a city" value={input} onChange={onChange}/>
        <FaSearchLocation className="iconSearch" onClick={handleClick}/>
      </div> 
      
        <div className="containerCities">
          <ListCity cities={cities} onClickCity={onClickCity} /> 
        </div>
      
      
      <div className="containerCurrentWeather">
        <CurrentWeather/>
        <CurrentWeatherReport/>
      </div>
      <div className="containerExtendedForecast">
        <ExtendedForecast/>
      </div>
    </div>
      
    </>
    
  )
}

export default Container