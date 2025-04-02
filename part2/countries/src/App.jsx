import { useState, useEffect } from 'react'
import Filter from './components/Filter'
// import Persons from './components/Persons'
import countryService from './services/countries'
// import Notification from './components/Notification'

const App = () => {
  const [country, setCountry] = useState('')
  const [search, setSearch] = useState('')

  useEffect(() => {
    countryService
      .getCountry('United Kingdom')
      .then(country => {
        console.log(country);
        setCountry(search)
      })
  }, [])

  const handleSearch = (event) => {
    setSearch(event.target.value)
  }

  // const personsToShow = (search === '')
  //   ? country
  //   : country.filter(country => country.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <div>
      <Filter search={search} handleSearch={handleSearch} title="find countries" />
      {country}
      {/* <Notification message={message} /> */}
      {/* <ul>
        {personsToShow.map(person =>
          <Persons key={person.id} person={person} del={() => del(person.id)} />
        )}
      </ul> */}
    </div>
  )
}

export default App