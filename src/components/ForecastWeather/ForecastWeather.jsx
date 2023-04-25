import ContainerCards from "../ContainerCards/ContainerCards"
import { useEffect, useState } from "react"
import "./ForecastWeather.css"

const ForecastWeather = ({lat,lon}) => {
    const API_URL= `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&cnt=7&&appid=e6d11dfe03e86bfc3c6388c5b53db4e9`
    const [listForecastWeather,setListForecastWeather]=useState([]);
    const [load,setLoad]=useState(false)

    useEffect(()=>{
        setLoad(false)
        fetch(API_URL)
        .then(response =>response.json())
        .then(data=>{
            setListForecastWeather(data.list)
        })
        setTimeout(() => {
            setLoad(true)
          }, 3000); 
},[API_URL])
  
   
  return (
   load && 
   (<div className="containerForecast">
        <ContainerCards list={listForecastWeather}/>
        <p>Este proyecto accede a la ubicación del dispositivo y utiliza la API OpenWeatherMap para mostrar datos meteorológicos de la zona correspondiente.</p>
        <br></br>
        <h3>Creado por Camila Pereyra</h3>
    </div>)
  )
}

export default ForecastWeather