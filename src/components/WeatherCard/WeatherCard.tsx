import { Button } from 'semantic-ui-react'

import WeatherCardDetail from '../WeatherCardDetail/WeatherCardDetail'

type WeatherData = {
  city: string
  weather: Array<{
    id: number
    main: string
  }>
  country: string
  temp: number
  main: {
    temp_max: number
    temp_min: number
    humidity: number
  }
  wind: {
    speed: number
  }
  wind_direction: number
  pressure: number
  sunrise: number
  visibility: number
  sunset: number
}

type Props = {
  weatherData: WeatherData
  savedCities: Array<string>
  callBackFromParent: (cityArr: Array<string>) => void
}

const WeatherCard = ({weatherData, savedCities, callBackFromParent}: Props) => {

  const deleteDataFromLocalStorage = () => {
    const existingCities = JSON.parse(localStorage.getItem("cityList"))
    const indexOfCity = existingCities.indexOf(weatherData.city)

    existingCities.splice(indexOfCity, 1)
    localStorage.setItem("cityList", JSON.stringify(existingCities))
    callBackFromParent(existingCities)
  }

  const saveDataToLocalStorage = () => {
    const existingCities = JSON.parse(localStorage.getItem("cityList")) || []

    existingCities.push(weatherData.city)
    localStorage.setItem("cityList", JSON.stringify(existingCities))
    callBackFromParent(existingCities)
  }


  const {
    city,
    weather,
    country,
    temp,
    main,
    wind,
    wind_direction,
    pressure,
    sunrise,
    visibility,
    sunset
  } = weatherData

  const celcius = Math.round(temp - 273.15)

  const saveBtn = (
    <Button
      positive
      size="mini"
      onClick={saveDataToLocalStorage}
      content="Save to favourites"
    />
  )

  const deleteBtn = (
    <Button
      negative
      size="mini"
      onClick={deleteDataFromLocalStorage}
      content="Delete from favourites"
    />
  )
  const existingCities = savedCities

  return (

    <div className="WeatherBoards">
      <div className="WeatherLeft-board">
        <h1 className="WeatherCard-degrees">{celcius}°</h1>
        <div className="WeatherCard-icon-container">
          <i className={`wi wi-owm-${weather[0].id} WeatherCard-icon`} />
          <p>{weather[0].main} as of {new Date().toLocaleTimeString()}</p>
        </div>
        <h2 className="WeatherCard-city">
          {city}, {country}
        </h2>
        {existingCities.includes(city) ? deleteBtn : saveBtn}
      </div>

        <WeatherCardDetail
          temp_max={main.temp_max}
          temp_min={main.temp_min}
          wind_speed={wind.speed}
          humidity={main.humidity}
          wind_direction={wind_direction}
          pressure={pressure}
          sunrise={sunrise}
          visibility={visibility}
          sunset={sunset}
        />

    </div>
  )
}


export default WeatherCard

