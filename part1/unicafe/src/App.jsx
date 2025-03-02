import { useState } from 'react'

const Button = ({ onClick, text }) => {
  return (
    <button onClick={onClick}>{text}</button>
  )
}

const StatisticLine = ({ text, value, postfix }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
      <td>{postfix}</td>
    </tr>
  )
}

const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad
  const average = ((all !== 0) ? ((good - bad) / all) : 0)
  const positive = ((all !== 0) ? (good / all * 100) : 0)

  if (all > 0) {
    return (
      <tbody>
        <StatisticLine text="good" value={good} />
        <StatisticLine text="neutral" value={neutral} />
        <StatisticLine text="bad" value={bad} />
        <StatisticLine text="all" value={all} />
        <StatisticLine text="average" value={average} />
        <StatisticLine text="positive" value={positive} postfix="%" />
      </tbody>
    )
  }

  return (
    <tbody>
      <tr>
        <td>No feedback given</td>
      </tr>
    </tbody>
  )
}

const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
    const updatedGood = good + 1;
    setGood(updatedGood);
  }

  const handleNeutralClick = () => {
    const updatedNeutral = neutral + 1;
    setNeutral(updatedNeutral);
  }

  const handleBadClick = () => {
    const updatedBad = bad + 1;
    setBad(updatedBad);
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={handleGoodClick} text="good" />
      <Button onClick={handleNeutralClick} text="neutral" />
      <Button onClick={handleBadClick} text="bad" />
      <h1>statistics</h1>
      <table>
        <Statistics good={good} neutral={neutral} bad={bad} />
      </table>
    </div>
  )
}

export default App