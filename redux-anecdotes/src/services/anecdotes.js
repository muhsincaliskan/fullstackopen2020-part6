import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
    const response = await axios.get(baseUrl)
    return response.data
}
const createNew = async (content) => {
    const id = (100000 * Math.random()).toFixed(0)
    const object = { content: content, votes: 0, id: id }
    const response = await axios.post(baseUrl, object)
    return response.data
}


const update = async (anecdoteToChange) => {
    const updatedAnecdote={...anecdoteToChange,votes:anecdoteToChange.votes+1}
    const response = await axios.put(`${baseUrl}/${anecdoteToChange.id}`, updatedAnecdote)
    return response.data
  }
// eslint-disable-next-line import/no-anonymous-default-export
export default { getAll, createNew,update }