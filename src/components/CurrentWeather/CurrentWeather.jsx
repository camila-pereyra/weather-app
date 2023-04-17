import { useEffect, useState } from "react"
import "./CurrentWeather.css"

const CurrentWeather = () => {
  /* const [city,setCity]=useState("")
  const [weatherCondition,setWeatherCondition]=useState("")
  const [weatherIcon,setWeatherIcon]=useState("")
  const [temp,setTemp]=useState("")

  const API_url="https://api.openweathermap.org/data/2.5/forecast?q=Argentina&&units=metric&cnt=16&appid=e6d11dfe03e86bfc3c6388c5b53db4e9"

  useEffect(() => {
    fetch(API_url)
    .then(response=>console.log(response.json()
    .then(data => {
      console.log(data);
      setCity(data.name)
      
      setWeatherCondition(data.weather[0].main)
      setTemp(data.main.temp)
      setWeatherIcon(`http://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`)
    })))

  }, []) */
  

  
  return (
    <div className="currentWeather">
      {/* <p>{city}</p>
      <div className="data">
        <div className="dataIcon">
          <img src={weatherIcon} alt="iconWeather" />
        </div>
        <div className="dataInfo"> 
          <p>{weatherCondition}</p>
          <p>{temp}°C</p>
        </div>        
      </div> */}
    </div>
  )
}

export default CurrentWeather