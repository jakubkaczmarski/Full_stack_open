import axios from 'axios'

const baseUrl = 'http://localhost:3001/persons'

const getAll = () =>
{
    return axios.get(baseUrl)
}

const create = newObject => 
{
  const req = axios.post(baseUrl, newObject)
  return req.then(response => response.data)
}

const update = (id ,phone, name) =>
{
  axios.put(`${baseUrl}/${id}`, {name: `${name}`, number: `${phone}`, id: `${id}`}).then(
  console.log("Phone number updated ")
  )
}

const delete_entry = (id) =>
{
  axios.delete(`${baseUrl}/${id}`).then(
    console.log(`Number deleted ${baseUrl}/ Here  ${id} `)
  )
}

export default {create, getAll, delete_entry, update}