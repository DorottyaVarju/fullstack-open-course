import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import Countries from './components/Countries'
import countryService from './services/countries'
import weatherService from './services/weather'
import Notification from './components/Notification'

const App = () => {
  const [countries, setCountries] = useState('')
  const [filter, setFilter] = useState('')
  const [weather, setWeather] = useState('')

  useEffect(() => {
    countryService
      .getAll()
      .then(countries => {
        setCountries(countries)
      })
  }, [])

  const countriesToShow = (filter === '')
    ? countries
    : countries.filter(country => country.name.common.toLowerCase().includes(filter.toLowerCase()))

  useEffect(() => {
    if (countriesToShow.length === 1) {
      weatherService
        .getWeather(countriesToShow[0].capitalInfo.latlng[0], countriesToShow[0].capitalInfo.latlng[1])
        .then(weather => {
          setWeather(weather)
        })
    }
  }, [filter])

  const handleFilter = (event) => {
    setFilter(event.target.value)
  }

  const show = name => {
    setFilter(name)
  }

  if (countriesToShow.length > 1 && countriesToShow.length <= 10) {
    return (
      <div>
        <Filter filter={filter} handleFilter={handleFilter} title="find countries" />
        <ul>
          {Object.values(countriesToShow).map(country =>
            <Countries key={country.cca2} country={country} show={() => show(country.name.common)} />
          )}
        </ul>
      </div>
    )
  } else if (countriesToShow.length === 1) {
    return (
      <div>
        <Filter filter={filter} handleFilter={handleFilter} title="find countries" />
        <h1>{countriesToShow[0].name.common}</h1>
        <p>Capital: {countriesToShow[0].capital}<br />Area: {countriesToShow[0].area}</p>
        <h2>Languages</h2>
        <ul>
          {Object.values(countriesToShow[0].languages).map(language => (
            <li key={language}>{language}</li>
          ))}
        </ul>
        <img src={countriesToShow[0].flags.png} alt={countriesToShow[0].flags.alt} />
        {weather !== '' ? (
          <>
            <h2>Weather in {countriesToShow[0].capital}</h2>
            <p>Temperature: {(weather.main.temp - 273.15).toFixed(2)} Celsius</p>
            <img
              src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
              alt={`${weather.weather.description}`}
            />
            <p>Wind: {weather.wind.speed} m/s</p>
          </>
        ) : null}
      </div>
    )
  } else {
    return (
      <div>
        <Filter filter={filter} handleFilter={handleFilter} title="find countries" />
        <Notification message="Too many matches, specify another filter" />
      </div>
    )
  }
}

export default App