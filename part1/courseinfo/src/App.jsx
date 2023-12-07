const Header = (props) =>{
  return(<>
    <h1>{props.course}</h1>
  </>)
}

const Content = (props) => {
  return(
    <>
      <p>
        {props.part[0].name} {props.part[0].exercises}
      </p>
      <p>
      {props.part[1].name} {props.part[1].exercises}
      </p>
      <p>
      {props.part[2].name} {props.part[2].exercises}
      </p>
    </>
  )
}

const Total = (props) => {
  return(
    <>
      Number of exercises {props.total}
    </>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part = [
    {name: 'Fundamentals of React', exercises: 10},
    {name: 'Using props to pass data', exercises: 7},
    {name: 'State of a component', exercises: 14},
  ]

  return (
    <div>
      <Header course = {course}/>
      <Content part = {part}/>
      <Total total = {part[0].exercises + part[1].exercises + part[2].exercises}/>
    </div>
  )
}

export default App