import ShowCountries from "./showCountries"
import ShowButton from "./ShowButton";

const ShowAll = ({countries,handleFilter}) => {

    
    function showCountry(event){
       handleFilter(event.target.name)
    }

    if(countries.length === 0){
        return(
            <div>
                search for a country
            </div>
        )
    }else if(countries.length > 10){
        return(
            <div>
                Too many matches, specify another filter
            </div>
        )
    }else if(countries.length < 10 && countries.length > 1){
        return(
            <ul>
                {countries.map(country => <ShowButton key={country.name.official} country = {country} handleClick = {showCountry}/>)}
            </ul>
        )
    }else if(countries.length === 1){
        return(
            <ShowCountries country = {countries[0]}/>
        )
    }



}
export default ShowAll