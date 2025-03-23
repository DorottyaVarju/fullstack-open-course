const Person = ({ person, del }) => {
    return (
        <li>
            {person.name}
            &nbsp;
            <button onClick={del}>Delete</button>
        </li>
    );
}

export default Person