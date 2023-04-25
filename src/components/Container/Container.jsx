import "./Container.css"
import CurrentWeather from "../CurrentWeather/CurrentWeather"
import { useEffect, useState } from "react"
import ForecastWeather from "../ForecastWeather/ForecastWeather";

const Container = () => {
  const [permise,setPermise]=useState(false)
  const [lat, setLat]=useState()
  const [lon,setLon]=useState()

   useEffect(() => {
    navigator.geolocation.getCurrentPosition(position => {
      setLat(position.coords.latitude);
      setLon(position.coords.longitude);
      setPermise(true)
    }, e => {
      if (e.PERMISSION_DENIED){
        console.log(e.message);
        setPermise(false)
      }
    })
   }, [])
   
  return (
    <>
      {!permise ? (
      <div className="containerDenied">
        <p>Acceso a localización denegado. Por favor permita el acceso a la ubicación y vuelva a atualizar</p>
        <div className="spinner"></div>
      </div>) : (<div className="container">
          <CurrentWeather lat={lat} lon={lon}/>
          <ForecastWeather lat={lat} lon={lon}/>
      </div>)}
    </>
      
  )
}

export default Container