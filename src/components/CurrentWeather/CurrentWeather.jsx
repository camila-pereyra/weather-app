import { useEffect, useState } from "react"
import {WiHumidity} from "react-icons/wi"
import {FaWind} from "react-icons/fa"
import {MdOutlineVisibility} from "react-icons/md"
import {CiTempHigh} from "react-icons/ci"
import {VscPerson} from "react-icons/vsc"
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
  const [load, setLoad] = useState (false)




  const API_url=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&&units=metric&appid=e6d11dfe03e86bfc3c6388c5b53db4e9`

  useEffect(() => {
    setLoad(true)
    fetch(API_url)
    .then(response=>console.log(response.json()
    .then(data => {
      setCity(data.name)
      setWeatherCondition(data.weather[0].main)
      setTemp(data.main.temp)
      setHumidity(data.main.humidity)
      setSensationTer(data.main.feels_like)
      setWeatherIcon(`http://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`)
      setVisibility((data.visibility/1000).toFixed(0))
      setWind((data.wind.speed*3.6).toFixed(2))
    })))
    setTimeout(()=>setLoad(false),2500) 
 
  }, [API_url]) 
  

  
  return (
     load ? (<div className="spinner"></div>) :
    (<div className="currentWeather">
       <p className="nameCity">{city}</p>
      <div className="data">
        <div className="dataIcon">
          <img src={weatherIcon} alt="iconWeather" />
          <p>{weatherCondition}</p>
        </div>
        <div className="dataInfo"> 
          <div><CiTempHigh/>Temperature: {temp}°C</div>
          <div><VscPerson/>Thermal Sensation: {sensationTerm}°C</div>
          <div><WiHumidity/>Humidity: {humidity}% </div>
          <div><MdOutlineVisibility/>Visibility: {visibility} km</div>
          <div><FaWind/>Wind: {wind} km/h</div>
        </div>        
      </div>
    </div>) 
  )
}

export default CurrentWeather