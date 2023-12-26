import ShowCountries from "./showCountries"

const ShowAll = ({countries}) => {
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
                {countries.map(country => <li>{country.name.common}</li>)}
            </ul>
        )
    }else if(countries.length === 1){
        return(
            <ShowCountries country = {countries[0]}/>
        )
    }



}
export default ShowAll