import Header from "./Header"
import Content from "./Content"
import TotalExercise from "./TotalExercise"

const Course = (props) => {
    const {id, name, parts} = props.course
    return(
        <div>
            <Header name = {name}/>
            <Content parts = {parts}/>
            <TotalExercise parts = {parts}/>
        </div>
    )
}

export default Course