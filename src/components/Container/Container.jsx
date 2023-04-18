import "./Container.css"
import CurrentWeather from "../CurrentWeather/CurrentWeather"
import { useState } from "react"
import ListCity from "../ListCity/ListCity"
import {FaSearchLocation} from "react-icons/fa";

const Container = () => {
  const [input,setInput]=useState("")
  const [cities,setCities]=useState([])
  const [lat, setLat]=useState()
  const [lon,setLon]=useState()
  const [search,setSearch]=useState(false)
  const [citySelect,setCitySelect]=useState(false)
  const API_URL=`https://api.openweathermap.org/geo/1.0/direct?q=${input}&limit=5&appid=e6d11dfe03e86bfc3c6388c5b53db4e9`

   const onChange = (e)=>{
    setInput(e.target.value);
   }

   
   const handleClick = (e)=>{
    e.preventDefault();
    if(input!=="" ){
      setCitySelect(false)
      fetch(API_URL).then(response=>response.json())
      .then(data=> { setCities(data)})
      setSearch(true)
    }
    setInput("")
  }
  const onClickCity = (lat,lon)=>{
    setLat(lat)
    setLon(lon)
    setSearch(false)
    setCities([])
    setTimeout(() => {
      setCitySelect(true)
    }, 100);
  }
    

  return (
    <>
    <div className="container">
      <div className="containerSearch">
        <div className="inputSearch">
          <input type="text" name="nameCity" id="nameCity" placeholder="Enter a city" value={input} onChange={onChange}/>
            <FaSearchLocation className="iconSearch" onClick={handleClick}/>
        </div>
        {search && (<ListCity cities={cities} onClickCity={onClickCity} /> )}
        
        
        
        
      </div> 
      <div className="containerCurrent">
        {citySelect && (<CurrentWeather lat={lat} lon={lon}/>)}
      </div>
      
      
      
    </div>
      
    </>
    
  )
}

export default Container