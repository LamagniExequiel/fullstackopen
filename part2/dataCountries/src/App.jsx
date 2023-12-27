import { useState,useEffect } from 'react'
import axios from 'axios'
import ShowCountries from './component/showCountries'
import ShowAll from './component/ShowAll'

function App() {
  const [countries,SetCountries] = useState([])
  const [filter,setFilter] = useState([])
  
  console.log(filter);

  useEffect(()=>{
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((response) => {
          SetCountries(response.data)
      })
  },[])

  const filtrarPais = (event) =>{
    if(event.key === "Enter")
      setFilter(countries.filter(country => country.name.common.toLowerCase().includes(event.target.value.toLowerCase())))
  }

  const changeFilter = (countryName)=>{
    const countryObj = countries.find(country => country.name.common === countryName)
    const filterAux = [countryObj]
    setFilter(filterAux)
  }

  return (
    <div>
      find countries: <input type="text" placeholder='press Enter to search' onKeyDown={filtrarPais}/>
      <br/><br/>
      <ShowAll countries = {filter} handleFilter={changeFilter}/>
    </div>
  )
}

export default App
