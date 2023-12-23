import React, { useState,useEffect } from 'react'
import Form from './components/PersonForm'
import Filter from './components/Filter'
import Persons from './components/Persons'
import axios from 'axios'

const App = () => {
  //usestate para datos de contactos
  const [ persons, setPersons ] = useState([]) 

  //use satate para modificar el nombre y el numero
  const [ newName, setNewName ] = useState('')
  const [newNumber, setNewNumber] = useState('')
  
  //constante para almacenar la lista a mostrar
  const [showFilter,setFilter] = useState([])

  //tomando datos del servidor
  useEffect(()=>{
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
        setFilter(response.data)  
      })

  },[])
  

  //funciones para el formulario
  //funcion para modificar el array persons, con condiciones especificas
  const addContact = (event) => {

    event.preventDefault()
    
    if(newName !== ""){
      const contactObject = {name: newName, number: newNumber}

      if(!persons.some(person => person.name === contactObject.name)){
        setPersons(persons.concat(contactObject))
        setFilter(showFilter.concat(contactObject))
        setNewName("")
      }else{
        alert(`${newName} is already added to phonebook`)
      }
    }else{
      alert(`cannot add the same contac more than once`)
    }
  }

  //funciones para almacenar el nombre y numero del form
  const handleName = event => setNewName(event.target.value)
  const handleNumber = event=>setNewNumber(event.target.value)
  //fin de funciones de formulario

  //funcion para filtrar por name el array persons
  const handleFilterName = (event) => {

    setFilter(persons.filter(person => person.name.toLowerCase().includes(event.target.value.toLowerCase())))

  }


  return (
    <div>

      <h2>Phonebook</h2>
      <h3>add a new contact</h3>
      <Form handleName = {handleName} handleNumber = {handleNumber} addContact = {addContact}/>

      <h2>Numbers</h2>
      <Filter handleFilterName ={handleFilterName}/>
      <Persons showFilter={showFilter}/>

    </div>
  )
}

export default App