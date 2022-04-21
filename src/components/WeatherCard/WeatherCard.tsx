
import { Button } from 'semantic-ui-react'

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

        <div className="WeatherRight-board">
          <div className="WeatherCard-detail">
            <div>
              <h4>High/Low</h4>
            </div>
            <div>
              <p>
                {Math.floor(main.temp_max - 273.15)}/
                {Math.floor(main.temp_min - 273.15)}
              </p>
            </div>
          </div>

          <div className="WeatherCard-detail">
            <div>
              <h4>Wind</h4>
            </div>
            <div>
              <p>
                {Math.floor((wind.speed * 18) / 5)} km/hr
              </p>
            </div>
          </div>

          <div className="WeatherCard-detail">
            <div>
              <h4>Humidity</h4>
            </div>
            <div>
              <p>
                {main.humidity} %
              </p>
            </div>
          </div>

          <div className="WeatherCard-detail">
            <div>
              <h4>Wind Direction</h4>
            </div>
            <div>
              <p>
                {wind_direction}
                <sup>o</sup> deg
              </p>
            </div>
          </div>

          <div className="WeatherCard-detail">
            <div>
              <h4>Pressure</h4>
            </div>
            <div>
              <p>
                {pressure} hPa
              </p>
            </div>
          </div>

          <div className="WeatherCard-detail">
            <div>
              <h4>Sunrise</h4>
            </div>
            <div>
              <p>
                {new Date(sunrise * 1000).toLocaleTimeString()}
              </p>
            </div>
          </div>

          <div className="WeatherCard-detail">
            <div>
              <h4>Visibility</h4>
            </div>
            <div>
              <p>
                {visibility / 1000} Km
              </p>
            </div>
          </div>

          <div className="WeatherCard-detail">
            <div>
              <h4>Sunset</h4>
            </div>
            <div>
              <p>
                {new Date(sunset * 1000).toLocaleTimeString()}
              </p>
            </div>
          </div>
        </div>
      </div>
  )
}


export default WeatherCard

