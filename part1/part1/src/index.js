import React from 'react'
import ReactDOM from 'react-dom'

// componente de react
const App = () => {
  const now = new Date()
  const a = 10
  const b = 20

  return (
    <div>
      <p>Hello world, it is {now.toString()}</p>
      <p>
        {a} plus {b} is {a + b}
      </p>
    </div>
  )
}
// comando que renderiza su contenido en el elemento div, 
// definido en el archivo public/index.html, que tiene el valor de id 'root'.
ReactDOM.render(<App />, document.getElementById('root')) 
