const Filter = ({ search, handleSearch, title }) => {
    return (
        <div>
            {title} <input value={search} onChange={handleSearch} />
        </div>
    )
}

export default Filter