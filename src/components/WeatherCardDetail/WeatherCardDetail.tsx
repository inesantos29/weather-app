
type Props = {
  temp_max: number
  temp_min: number
  wind_speed: number
  humidity: number
  wind_direction: number
  pressure: number
  sunrise: number
  visibility: number
  sunset: number
}

const WeatherCardDetail = ({temp_max, temp_min, wind_speed, humidity, wind_direction, pressure, sunrise, visibility, sunset}: Props) => {


  return (
    <div className="WeatherRight-board">
      <div className="WeatherCard-detail">
        <div>
          <h4>High/Low</h4>
        </div>
        <div>
          <p>
            {Math.floor(temp_max - 273.15)}/
            {Math.floor(temp_min - 273.15)}
          </p>
        </div>
      </div>

      <div className="WeatherCard-detail">
        <div>
          <h4>Wind</h4>
        </div>
        <div>
          <p>
            {Math.floor((wind_speed * 18) / 5)} km/hr
          </p>
        </div>
      </div>

      <div className="WeatherCard-detail">
        <div>
          <h4>Humidity</h4>
        </div>
        <div>
          <p>
            {humidity} %
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
  )
}


export default WeatherCardDetail

