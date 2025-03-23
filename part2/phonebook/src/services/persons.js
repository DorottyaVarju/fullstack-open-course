import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const create = newObject => {
    const request = axios.post(baseUrl, newObject)
    return request.then(response => response.data)
}

const getAll = () => {
    const request = axios.get(baseUrl)
    // return request.then(response => response.data)
    const nonExisting = {
        id: 10000,
        name: 'This is not saved to server',
        number: '32342',
    }
    return request.then(response => response.data.concat(nonExisting))
}

const update = (id, newObject) => {
    const request = axios.put(`${baseUrl}/${id}`, newObject);
    return request.then(response => response.data)
}

const del = (id) => {
    const request = axios.delete(`${baseUrl}/${id}`)
    return request.then(response => response.data)
}

export default { create, getAll, update, del }