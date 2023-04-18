import {BsFillGeoAltFill} from "react-icons/bs"
import "./City.css"

const City = ({name,state, lat, lon, onClickCity}) => {
  
  return (
    <button className="city"  onClick={() => {
      onClickCity(lat,lon);
    }}>
      <BsFillGeoAltFill />{name}, {state} 
      </button> 
  )
}

export default City