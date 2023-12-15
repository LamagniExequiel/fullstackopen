import { useState } from 'react'
import Button from "./components/Button"
import Display from "./components/Display"

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const all = good + neutral + bad
  const average = calcAverage()
  const positive = calcPositive()

  function calcAverage(){
    if(all === 0){
      return 0
    }
    return (good - bad) /all
  }

  function calcPositive(){
    if(all === 0){
      return 0
    }
    return (good * 100)/all
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick = {()=>setGood(good + 1)} text = "good"/>
      <Button handleClick = {()=>setNeutral(neutral + 1)} text = "neutral"/>
      <Button handleClick = {()=>setBad(bad + 1)} text = "bad"/>
      <br/>
      <h1>statistics</h1>
      <Display text = "good" value = {good}/>
      <Display text = "neutral" value = {neutral}/>
      <Display text = "bad" value = {bad}/>
      <Display text = "all" value = {all}/>
      <Display text = "average" value = {average}/>
      <Display text = "positive" value = {positive} symbol = "%"/>

    </div>
  )
}

export default App