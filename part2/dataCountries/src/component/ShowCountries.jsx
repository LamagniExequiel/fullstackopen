import ShowClima from "./ShowClima"
import { useEffect, useState } from "react"
import axios from "axios"

const ShowCountries = ({country}) => {
    
    const languagesArray = Object.values(country.languages)
    
    return(<div>
        <h1>{country.name.common}</h1>
        <br/>
        capital: {country.capital}
        <br/>
        population: {country.population}
        <br/>
        <h1>Lenguages</h1>
        <ul>
            {languagesArray.map(languages => <li key={languagesArray.indexOf(languages)}>{languages}</li>)}
        </ul>
        <br/>
        <img src={country.flags.png} height="100px" width="200px"/>
        <ShowClima country={country}/>
        
    </div>)
    
}
export default ShowCountries