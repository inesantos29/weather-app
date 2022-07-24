import { useEffect, useState } from 'react'
import axios from 'axios'
import { WeatherEngineWrapper } from './style'

import Favourites from '../Favourites/Favourites'
import WeatherCard from '../WeatherCard/WeatherCard'
import SearchBar from '../SearchBar/SearchBar'
import API_KEY from '../../config'


const WeatherEngine = () => {
  const [weatherData, setWeatherData] = useState({
    weather: null,
    city: null,
    country: null,
    temp: null,
    main: null,
    wind: null,
    humidity: null,
    wind_direction: null,
    pressure: null,
    sunrise: null,
    visibility: null,
    sunset: null,
  })
  const [searchDone, setSearchDone] = useState<boolean>(false)
  const [savedCities, setSaveCities] = useState<Array<string>>([])
  const [hasSavedCities, setHasSavedCities] = useState<boolean>(false)
  const [errorMessage, setErrorMessage] = useState<string>("")


  async function getWeather(q: string) {
    const apiRoot = 'https://api.openweathermap.org/data/2.5/weather?q='

    axios.get(`${apiRoot}${q}&appid=${API_KEY}`)
      .then(response => {
        const result = response.data;
        setWeatherData({
          weather: result.weather,
          city: result.name,
          country: result.sys.country,
          temp: result.main.temp,
          main: result.main,
          wind: result.wind,
          humidity: result.main.humidity,
          wind_direction: result.wind.deg,
          pressure: result.main.pressure,
          sunrise: result.sys.sunrise,
          visibility: result.visibility,
          sunset: result.sys.sunset
        })
        setSearchDone(true)
        setErrorMessage("")
      })
      .catch(error => setErrorMessage(error.message))
  }

  const updateSavedCities = (cityArr: Array<string>) => {
    const hasCities = cityArr.length > 0
    setSaveCities(cityArr)
    setHasSavedCities(hasCities)
  }

  useEffect(() =>  {

    console.log('Hello page')
    let existingCities = JSON.parse(localStorage.getItem("cityList") || "[]")

    if (existingCities.length !== 0) {
      setHasSavedCities(true)
      setSaveCities(existingCities)
    }
  },[])


  return (
    <WeatherEngineWrapper>
      <SearchBar
          callBackFromParent={getWeather}
          error={errorMessage}
        />
        {searchDone && (
          <WeatherCard
            weatherData={weatherData}
            savedCities={savedCities}
            callBackFromParent={updateSavedCities}
          />
        )}
        {hasSavedCities && (
          <Favourites
            savedCities={savedCities}
            callBackFromParent={getWeather}
          />
        )}
    </WeatherEngineWrapper>
  )
}

export default WeatherEngine



