const Person = ({ person, del }) => {
    return (
        <li>
            {person.name} {person.number}
            &nbsp;
            <button onClick={del}>Delete</button>
        </li>
    );
}

export default Person