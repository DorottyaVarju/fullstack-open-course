const Filter = ({ filter, handleFilter, title }) => {
    return (
        <div>
            {title} <input value={filter} onChange={handleFilter} />
        </div>
    )
}

export default Filter