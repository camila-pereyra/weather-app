import { useEffect, useState } from "react"
import {WiHumidity} from "react-icons/wi"
import {FaWind} from "react-icons/fa"
import {MdOutlineVisibility} from "react-icons/md"
import {CiTempHigh} from "react-icons/ci"
import {VscPerson} from "react-icons/vsc"
import {BsFillGeoAltFill} from "react-icons/bs"
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
  const [day, setDay]=useState()
  const [month, setMonth]=useState()
  const [year, setYear]=useState()


  const API_url=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&&units=metric&appid=e6d11dfe03e86bfc3c6388c5b53db4e9`

  useEffect(() => {
    setLoad(false)
    fetch(API_url)
    .then(response=>response.json())
    .then(data => {
      setCity(data.name)
      setWeatherCondition(data.weather[0].main)
      setTemp(data.main.temp)
      setHumidity(data.main.humidity)
      setSensationTer(data.main.feels_like)
      setWeatherIcon(`https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`)
      setVisibility((data.visibility/1000).toFixed(0))
      setWind((data.wind.speed*3.6).toFixed(2))
      const date= new Date ((data.dt * 1000))
      setDay(date.getUTCDate())
      setMonth(date.getMonth()+1)
      setYear(date.getFullYear())
    })
    setTimeout(() => {
      setLoad(true)
    }, 3000);  
  }, [API_url]) 
  
  
  return (
     load ? (<div className="currentWeather">
       <p className="nameCity"><BsFillGeoAltFill/>{city}</p>
      <div className="data">
        <div className="dataIcon">
          <p>{day}/{month}/{year}</p>
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
    </div>) : (
      <div className="containerDenied">
        <p>Cargando ...</p>
        <div className="spinner"></div>
      </div>)
  )
}

export default CurrentWeather