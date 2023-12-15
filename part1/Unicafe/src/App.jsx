import { useState } from 'react'
import Button from "./components/Button"
import Display from "./components/Display"
import Statistics from './components/Statistics'

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick = {()=>setGood(good + 1)} text = "good"/>
      <Button handleClick = {()=>setNeutral(neutral + 1)} text = "neutral"/>
      <Button handleClick = {()=>setBad(bad + 1)} text = "bad"/>
      <Statistics good ={good} neutral = {neutral} bad = {bad}/>
    </div>
  )
}

export default App