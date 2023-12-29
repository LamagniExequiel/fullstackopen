import React, { useState,useEffect } from 'react'
import Form from './components/PersonForm'
import Filter from './components/Filter'
import Persons from './components/Persons'
import persosnsServices from './services/conections'

const App = () => {

  //definicion de constantes y/o variables
  //usestate para datos de contactos
  const [ persons, setPersons ] = useState([]) 

  //use satate para modificar el nombre y el numero
  const [ newName, setNewName ] = useState('')
  const [newNumber, setNewNumber] = useState('')
  
  //constante para almacenar la lista a mostrar
  const [showFilter,setFilter] = useState([])

  const [actualizar,setActualizar] = useState(0)
  //------------------------------------

  //tomando datos del servidor
  useEffect(()=>{
    persosnsServices.getAll().then(response => {
        setPersons(response)
        setFilter(response)  
      }).catch(()=>{
        if(confirm("problems connecting to the server, reload page ?")){
          location. reload()
        }else{
          close()
        }
  
      })

  },[actualizar])
  //-----------------------------------

  console.log(persons)
  console.log(actualizar);

  //funciones para el formulario
  //funcion para modificar el array persons, con condiciones especificas y actualiar la base de datos
  const addContact = (event) => {

    event.preventDefault()
    
    const contactObject = {name: newName, number: newNumber}

    if(!persons.some(person => person.name === contactObject.name)){
        
      persosnsServices.create(contactObject).then(()=>{
        setActualizar(actualizar+1)
      }).catch(()=>{
        alert("problems adding contact")
      })

    }else{
      if(confirm(`${newName} is already added to phonebook, replace the old number with a new one ?`)){
        const id = persons.find(person => person.name === contactObject.name).id
        changeNumber(id,contactObject)
        setActualizar(actualizar+1)
      }
    }
  }

  //funcion para cambiar el numero
  const changeNumber = (id,contactObject) =>{
      persosnsServices.update(id,contactObject).then(response => {
        console.log(response);
      }).catch(()=>{
        alert("problems changing the number")
      })
  }

  //funciones para almacenar el nombre y numero del form
  const handleName = event => setNewName(event.target.value)
  const handleNumber = event=>setNewNumber(event.target.value)

  //fin de funciones de formulario
  //----------------------------------

  //funcion para eliminar datos de la base de datos
  const eliminatePerson = id =>{
    persosnsServices.eliminate(id).then(response =>{
      setActualizar(actualizar+1)
      console.log(response)
    })
    .catch(error => {
      alert(
        `the note person was already deleted from server`
      )
    })
  }

  //---------------------------------

  //funcion para filtrar por name el array persons
  const handleFilterName = (event) => {

    setFilter(persons.filter(person => person.name.toLowerCase().includes(event.target.value.toLowerCase())))

  }
  //--------------------------------------

  //return de app
  return (
    <div>

      <h2>Phonebook</h2>
      <h3>add a new contact</h3>
      <Form handleName = {handleName} handleNumber = {handleNumber} addContact = {addContact}/>

      <h2>Numbers</h2>
      <Filter handleFilterName ={handleFilterName}/>
      <Persons showFilter={showFilter} eliminatePerson = {eliminatePerson}/>

    </div>
  )
}

export default App