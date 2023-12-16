const StaticLine = (props)=>{
    return(
        <tr>
            <td>{props.text}</td>
            <td>{props.value}</td>
            <td>{props.symbol}</td>
        </tr>
    )
}

export default StaticLine