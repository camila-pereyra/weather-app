import Card from "../Card/Card";
import "./ContainerCards.css"

const ContainerCards = ({list}) => {
   
  return (
    <>
      <h2 className="containerName">Forecast Weather</h2>
      <div className="containerCards">
        {list!==undefined && list.map((element,index)=><Card dt={element.dt} temp={element.main.temp} icon={element.weather[0].icon} key={index} main={element.weather[0].main}/>) }
      </div>
    </>
    )
  }

export default ContainerCards