const ShowCountries = ({country}) => {
    console.log(country);
    return(<div>
        <h1>{country.name.common}</h1>
        <br/>
        capital: {country.capital}
        <br/>
        population: {country.population}
        <br/>
        <h1>Lenguages</h1>
        <ul>
            {Object.values(country.languages).map(languages => <li>{languages}</li>)}
        </ul>
        <br/>
        <img src={country.flags.png} height="100px" width="200px"/>
    </div>)
    
}
export default ShowCountries