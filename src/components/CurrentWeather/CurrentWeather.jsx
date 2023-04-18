import { useEffect, useState } from "react"
import "./CurrentWeather.css"

const CurrentWeather = ({lat,lon}) => {
  const [city,setCity]=useState("")
  const [weatherCondition,setWeatherCondition]=useState("")
  const [weatherIcon,setWeatherIcon]=useState("")
  const [temp,setTemp]=useState("")
  const [sensationTerm,setSensationTer]=useState("")
  const [visibility,setVisibility]=useState()
  const [humidity,setHumidity]=useState("")
  const [wind,setWind]=useState()

  const API_url=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&&units=metric&appid=e6d11dfe03e86bfc3c6388c5b53db4e9`

  useEffect(() => {
    fetch(API_url)
    .then(response=>console.log(response.json()
    .then(data => {
      console.log(data);
      setCity(data.name)
      setWeatherCondition(data.weather[0].main)
      setTemp(data.main.temp)
      setHumidity(data.main.humidity)
      setSensationTer(data.main.feels_like)
      setWeatherIcon(`http://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`)
      setVisibility(data.visibility/1000)
      setWind((data.wind.speed*3.6).toFixed(2))
    })))

  }, [API_url]) 
  

  
  return (
    <div className="currentWeather">
       <p>{city}</p>
      <div className="data">
        <div className="dataIcon">
          <p>{weatherCondition}</p>
          <img src={weatherIcon} alt="iconWeather" />
        </div>
        <div className="dataInfo"> 
          <p>Temperatura: {temp}°C</p>
          <p>Sensación Térmica: {sensationTerm}°C</p>
          <p>Humedad: {humidity}%</p>
          <p>Visibilidad: {visibility} km</p>
          <p>Viento: {wind} km/h</p>
        </div>        
      </div>
    </div>
  )
}

export default CurrentWeather