import {useState} from 'react'

const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)

  const handleGoodClick = () => {
    const updatedGood = good + 1;
    const updatedAll = updatedGood+neutral+bad;
    setGood(updatedGood);
    setAll(updatedAll);
    calcStats(updatedGood, bad, updatedAll);
  }

  const handleNeutralClick = () => {
    const updatedNeutral = neutral + 1;
    const updatedAll = good+updatedNeutral+bad;
    setNeutral(updatedNeutral);
    setAll(updatedAll);
    calcStats(good, bad, updatedAll);
  }

  const handleBadClick = () => {
    const updatedBad = bad + 1;
    const updatedAll = good+neutral+updatedBad;
    setBad(updatedBad);
    setAll(updatedAll);
    calcStats(good, updatedBad, updatedAll);
  }

  const calcStats = (g, b, all) => {
    const resultPositivePercentage = g/all * 100;
    const resultAverage = (g-b)/all;
    setPositive(resultPositivePercentage);
    setAverage(resultAverage);
  }

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={handleGoodClick}>good</button>
      <button onClick={handleNeutralClick}>neutral</button>
      <button onClick={handleBadClick}>bad</button>
      <h1>statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {all}</p>
      <p>average {average}</p>
      <p>positive {positive} %</p>
    </div>
  )
}

export default App