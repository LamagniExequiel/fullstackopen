import Display from "./Display"

const Statistics = (props) =>{

    const good = props.good
    const neutral = props.neutral
    const bad = props.bad
    
    const all = good + neutral + bad
    const average = calcAverage()
    const positive = calcPositive()

    console.log(good)
    console.log(bad)
    console.log(neutral)

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

    if((good + neutral + bad) === 0){
        return(
            <div>
                No feedback given
            </div>
        )
    }
    return(
        <div>
            <Display text = "good" value = {good}/>
            <Display text = "neutral" value = {neutral}/>
            <Display text = "bad" value = {bad}/>
            <Display text = "all" value = {all}/>
            <Display text = "average" value = {average}/>
            <Display text = "positive" value = {positive} symbol = "%"/>
        </div>
    )
}

export default Statistics