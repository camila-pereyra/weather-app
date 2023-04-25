import { useEffect, useState } from "react"
import "./Card.css"

const Card = ({dt,temp,icon, main}) => {
  const [hour,setHour]=useState()
  const [day, setDay]=useState()
  const [month, setMonth]=useState()
  const [year, setYear]=useState()
  const [urlIcon, setUrlIcon]=useState()
  useEffect(()=>{
    const date= new Date ((dt * 1000))
    setHour(date.getHours());
    setDay(date.getUTCDate())
    setMonth(date.getMonth()+1)
    setYear(date.getFullYear())
    setUrlIcon(`https://openweathermap.org/img/wn/${icon}@4x.png`)
  },[dt,icon]
  )
  
  return (
    <div className="card">
      <img className="cardIcon" src={urlIcon} alt="" />
      <p>{main}</p>
      <p className="cardTemp">Temp: {temp}°C</p>
      <p className="cardDate">{day}/{month}/{year}</p>
      <p className="cardHour">{hour} hs</p>
    </div>
  )
}

export default Card