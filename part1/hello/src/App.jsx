import { useState } from 'react'
import Display from "./Display"
import Button from "./Button"

const App = () => {
  const [ counter, setCounter ] = useState(0)


  const increaseByOne = () => setCounter(counter + 1)
  const decreaseByOne = () => setCounter(counter - 1)
  const setToZero = () => setCounter(0)

  return (
    <div>
      <Display counter = {counter}/>
      <Button handleClick={increaseByOne} text = "plus"/>
      <Button handleClick={decreaseByOne} text = "minus"/>
      <Button handleClick={setToZero} text = "zero"/>
    </div>
  )
}

export default App
