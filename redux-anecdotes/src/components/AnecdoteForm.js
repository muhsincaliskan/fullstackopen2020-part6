import React from 'react'
// eslint-disable-next-line no-unused-vars
import { useDispatch,connect } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const AnecdoteForm = (props) => {
  // const dispatch = useDispatch()

  const addAnecdote = async (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    props.createAnecdote(content)
    props.setNotification(`Anecdote '${content}' successfully added`, 5)
  }

  return (
    <form onSubmit={addAnecdote}>
      <input name="anecdote" />
      <button type="submit">Add</button>
    </form>
  )
}
const mapDispachToProps={
  createAnecdote,setNotification
}
export default connect(null, mapDispachToProps)( AnecdoteForm)