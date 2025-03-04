import { use, useState } from 'react'

const Button = ({ onClick, text }) => {
  return (
    <button onClick={onClick}>{text}</button>
  )
}

const AnecdoteWithMostVote = ({anecdotes, votes}) => {
  const indexOfMaxVote = Object.values(votes).indexOf(Math.max(...Object.values(votes)))
  return (
    <>
      <h1>Anecdote with most votes</h1>
      <div>
        {anecdotes[indexOfMaxVote]} <br></br>
        has {votes[indexOfMaxVote]} votes
      </div>
    </>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  const [selected, setSelected] = useState(0)
  const zeroFilledObject = {}
  anecdotes.forEach((key, index) => {
    zeroFilledObject[index] = 0
  })
  const [votes, setVotes] = useState(zeroFilledObject)

  const handleNextAnecdote = () => {
    const randomInt = Math.floor(Math.random() * anecdotes.length)
    setSelected(randomInt)
  }

  const handleVote = () => {
    setVotes({ ...votes, [selected]: votes[selected] + 1 })
  }

  return (
    <>
      <h1>Anecdote of the day</h1>
      <div>
        {anecdotes[selected]} <br></br>
        has {votes[selected]} votes
      </div>
      <Button onClick={handleVote} text="vote" />
      <Button onClick={handleNextAnecdote} text="next anecdote" />
      <AnecdoteWithMostVote anecdotes = {anecdotes} votes = {votes}/>
    </>
  )
}

export default App
