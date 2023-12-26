import ShowCountries from "./showCountries"

const ShowButton = ({country,handleClick}) => {

return(
    <li>
        {country.name.common} 
        <button name={country.name.common} onClick={handleClick}>show</button>
    </li>
 )
}
export default ShowButton