import {BsFillGeoAltFill} from "react-icons/bs"
import "./City.css"

const City = ({name,state, lat, lon, onClickCity}) => {
  
  return (
    <button className="cityButton"  onClick={() => {
      onClickCity(lat,lon);
    }}>
      <BsFillGeoAltFill className="iconGeo"/>
      <span>{name}, {state}</span>
    </button> 
  )
}

export default City