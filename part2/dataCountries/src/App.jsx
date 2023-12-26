import { useState,useEffect } from 'react'
import axios from 'axios'
import ShowCountries from './component/showCountries'
import ShowAll from './component/ShowAll'

function App() {
  const [countries,SetCountries] = useState([])
  const [filter,setFilter] = useState([])
  
  useEffect(()=>{
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((response) => {
          SetCountries(response.data)
      })
  },[])

  const filtrarPais = (event) =>{
      setFilter(countries.filter(country => country.name.common.toLowerCase().includes(event.target.value.toLowerCase())))
  }


  return (
    <div>
      find countries: <input type="text" placeholder='nombre del pais' onChange={filtrarPais}/>
      <br/><br/>
      <ShowAll countries = {filter}/>
    </div>
  )
}

export default App
