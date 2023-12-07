import React from 'react'
import ReactDOM from 'react-dom'

const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name}, you are {props.age} years old</p>
    </div>
  )
}

const App = () => {
  const name = "peter"
  const age = "10"
  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="George" age = {12 + 3} />
      <Hello name={name} age = {age} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
