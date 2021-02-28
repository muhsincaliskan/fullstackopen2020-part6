import React from 'react'
// import { useDispatch, useSelector } from 'react-redux'
import { connect } from 'react-redux'
import { vote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const Anecdote = ({ anecdote, voteHandler }) => {
  // const dispatch = useDispatch()

  return (
    <div>
      <div>
        {anecdote.content}
      </div>
      <div>
        has {anecdote.votes}
        <button onClick={voteHandler}>Vote</button>
      </div>
    </div>
  )
}

const AnecdoteList = (props) => {
  const voteHandler = (anecdote) => {
    // dispatch(vote(anecdote))
    // dispatch(setNotification(`You voted '${anecdote.content}'`, 5))
    props.vote(anecdote)
    props.setNotification(`You voted '${anecdote.content}'`, 5)
  }


  return (
    props.anecdotes
    .filter(anecdote=>anecdote.content.toLowerCase().includes(props.filter.toLowerCase()))
    .map(anecdote => <Anecdote key={anecdote.id} anecdote={anecdote} voteHandler={()=>voteHandler(anecdote)} />)
  )
}
const mapStateToProps = (state) => {
  // if(state.filter==='ALL')
  // {
  //   return{
  //     anecdotes: state.anecdotes
  //   }
  // }
  console.log(state)
  return {
    anecdotes: state.anecdotes.sort((a, b) => b.votes - a.votes),
    filter: state.filter
  }
}

const mapDispatchToProps = {
  vote, setNotification
}


export default connect(mapStateToProps, mapDispatchToProps)(AnecdoteList)