const Person = ({persons, search}) => {

    const personsToDisplay = (search === '') ? persons : persons.filter(person => person.name.toLowerCase().includes(search.toLowerCase()))

    return (
        <ul>
            {personsToDisplay.map((person) => <li key={person.name}>{person.name} {person.number}</li>)}
        </ul>
    )
}

export default Person