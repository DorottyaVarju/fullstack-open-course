const Country = ({ country, show }) => {
    return (
        <li>
            {country.name.common}
            &nbsp;
            <button onClick={show}>Show</button>
        </li>
    );
}

export default Country