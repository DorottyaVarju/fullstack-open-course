import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import Countries from './components/Countries'
import countryService from './services/countries'
import Notification from './components/Notification'

const App = () => {
  const [countries, setCountries] = useState('')
  const [search, setSearch] = useState('')

  useEffect(() => {
    countryService
      .getAll()
      .then(countries => {
        setCountries(countries)
      })
  }, [])

  const handleSearch = (event) => {
    setSearch(event.target.value)
  }

  const countriesToShow = (search === '')
    ? countries
    : countries.filter(country => country.name.common.toLowerCase().includes(search.toLowerCase()))

  if (countriesToShow.length > 1 && countriesToShow.length < 10) {
    return (
      <div>
        <Filter search={search} handleSearch={handleSearch} title="find countries" />
        <ul>
          {Object.values(countriesToShow).map(country =>
            <Countries key={country.cca2} country={country} />
          )}
        </ul>
      </div>
    )
  } else if (countriesToShow.length === 1) {
    return (
      <div>
        <Filter search={search} handleSearch={handleSearch} title="find countries" />
        <h1>{countriesToShow[0].name.common}</h1>
        <p>Capital {countriesToShow[0].capital}<br />Area {countriesToShow[0].area}</p>
        <h2>Languages</h2>
        <ul>
          {Object.values(countriesToShow[0].languages).map(language =>
            <li key={language}>{language}</li>
          )}
        </ul>
        <img src={countriesToShow[0].flags.png} alt={countriesToShow[0].flags.alt} />
      </div>
    )
  } else {
    return (
      <div>
        <Filter search={search} handleSearch={handleSearch} title="find countries" />
        <Notification message="Too many matches, specify another filter" />
      </div>
    )
  }
}

export default App