import "./Container.css"
import CurrentWeather from "../CurrentWeather/CurrentWeather"
import CurrentWeatherReport from "../CurrentWeatherReport/CurrentWeatherReport"
import ExtendedForecast from "../ExtendedForecast/ExtendedForecast"

const Container = () => {
  return (
    <div>
      <CurrentWeather/>
      <CurrentWeatherReport/>
      <ExtendedForecast/>
    </div>
  )
}

export default Container