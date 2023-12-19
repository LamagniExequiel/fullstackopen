import Header from "./Header"
import Content from "./Content"

const Course = (props) => {
    const {id, name, parts} = props.course
    return(
        <div>
            <Header name = {name}/>
            <Content parts = {parts}/>
        </div>
    )
}

export default Course