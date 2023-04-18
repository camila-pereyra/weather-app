import {BsFillGeoAltFill} from "react-icons/bs"
import "./City.css"

const City = ({name, state, lat, lon, country, onClickCity}) => {
  
  return (
    <button className="cityButton"  onClick={() => {
      onClickCity(lat,lon);
    }}>
      <BsFillGeoAltFill className="iconGeo"/>
      <span>{name}</span>
      {state===undefined? "" :<span>, {state}</span>}
      {country===undefined? "" :<span>, {country}</span>}
    </button> 
  )
}

export default City