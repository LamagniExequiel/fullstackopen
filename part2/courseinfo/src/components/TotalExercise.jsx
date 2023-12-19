const TotalExercise = ({parts}) => {
    return(
        <h3>
            total of {parts.reduce((sum,part) => sum + part.exercises,0)} exercises
        </h3>
    )
}
export default TotalExercise