import StaticLine from "./StaticLine"

const Statistics = (props) =>{

    const good = props.good
    const neutral = props.neutral
    const bad = props.bad
    
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

    if((good + neutral + bad) === 0){
        return(
            <div>
                No feedback given 
            </div>
        )
    }
    return(
        <div>
            <StaticLine text = "good" value = {good}/>
            <StaticLine text = "neutral" value = {neutral}/>
            <StaticLine text = "bad" value = {bad}/>
            <StaticLine text = "all" value = {all}/>
            <StaticLine text = "average" value = {average}/>
            <StaticLine text = "positive" value = {positive} symbol = "%"/>
        </div>
    )
}

export default Statistics