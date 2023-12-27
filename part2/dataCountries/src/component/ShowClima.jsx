import { useState,useEffect } from "react"
import axios from "axios"

const ShowClima = ({country}) =>{
   
    const objCentinela ={name: "centinela"}
    const [clima,setClima] = useState(objCentinela)

    const params = {
        access_key: import.meta.env.VITE_API_KEY,
        query: country.name.common
    }
    useEffect(() =>{
        axios.get('http://api.weatherstack.com/current', {params})
            .then(response => {
                if(response.statusText === "OK"){
                    setClima(response.data)
                }else{
                    console.log("no se pudo conectar");
                    console.log(response);
                }
                
            })
    },[])

    if(clima != objCentinela){
        return(
            <div>
                <h3>
                    {clima.current.weather_descriptions} in {clima.location.country}
                </h3>
                <h4>temperature: {clima.current.temperature} Celsius</h4> 
                <img src={clima.current.weather_icons} height="100px" width="100px"/>
                <h4>wind: {clima.current.wind_speed} mph direction: {clima.current.wind_dir}</h4> 
            </div>
         )
    }else{
        return(
            <></>
        )
            
    }

}
export default ShowClima