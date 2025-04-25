import axios from 'axios'
//const baseUrl = 'http://localhost:3001/recipes'
const baseUrl = '/api/recipes'

const getAll = () => {
  console.log('FE: recipeService.getAll()')
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const create = newObject => {
  console.log('FE: recipeService.create()')
  const request = axios.post(baseUrl, newObject)
  return request.then(response => response.data)
}

const update = (id, newObject) => {
  console.log('FE: recipeService.update()')
  const request = axios.put(`${baseUrl}/${id}`, newObject)
  return request.then(response => response.data)
}

const remove = (id) => {
  console.log('FE: recipeService.remove()')
  const request = axios.delete(`${baseUrl}/${id}`);
  return request.then((response) => response.data);
}

export default { getAll, create, update, remove }