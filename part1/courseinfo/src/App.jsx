const Header = (props) =>{
  return(<>
    <h1>{props.course}</h1>
  </>)
}

const Total = (props) => {
  return(
    <>
      Number of exercises {props.total}
    </>
  )
}

const Content = (props) => {
  return(
    <>
      <Part name = {props.part[0].name} exercises = {props.part[0].exercises}/>
      <Part name = {props.part[1].name} exercises = {props.part[1].exercises}/>
      <Part name = {props.part[2].name} exercises = {props.part[2].exercises}/>
    </>
  )
}

const Part = (props) => {
  return(
    <p>
        {props.name} {props.exercises}
    </p>
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