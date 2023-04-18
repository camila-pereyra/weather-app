import City from "../City/City"
import "./ListCity.css"

const ListCity = ({cities, onClickCity}) => {
  
  return (
    <div className="listCities">
      {cities.map((city, index)=>(<City key={index} name={city.name} state={city.state} lat={city.lat} lon={city.lon} onClickCity={onClickCity}/>)) }
    </div>
   
  )
}

export default ListCity