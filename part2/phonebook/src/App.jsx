import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import personService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [search, setSearch] = useState('')

  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleSearch = (event) => {
    setSearch(event.target.value)
  }

  const del = id => {
    const person = persons.find(p => p.id === id)

    if (window.confirm(`Delete ${person.name} ?`) === true) {
      personService
        .del(id)
        .then(returnedPerson => {
          setPersons(persons.filter(person => person.id !== id));
        })
    }
  }

  const addName = event => {
    event.preventDefault()
    const personObject = { name: newName, number: newNumber }
    newName === ''
      ? alert('Enter a name')
      : (
        persons.some(person => person.name === newName)
          ? alert(`${newName} is already added to phonebook`)
          : (
            personService
              .create(personObject)
              .then(returnedPerson => {
                setPersons(persons.concat(returnedPerson))
                setNewName('')
                setNewNumber('')
              })
          )
      );
  }

  const personsToShow = (search === '')
    ? persons
    : persons.filter(person => person.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter search={search} handleSearch={handleSearch} />
      <h2>add a new</h2>
      <PersonForm addName={addName} newName={newName} handleNameChange={handleNameChange} newNumber={newNumber} handleNumberChange={handleNumberChange} />
      <h2>Numbers</h2>
      <ul>
        {personsToShow.map(person =>
          <Persons key={person.id} person={person} del={() => del(person.id)} />
        )}
      </ul>
    </div>
  )
}

export default App