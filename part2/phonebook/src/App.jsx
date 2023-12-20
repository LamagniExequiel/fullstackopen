import React, { useState } from 'react'
import Contacto from './components/Contacto'

const App = () => {

  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')

  const addContact = (event) => {

    event.preventDefault()
    
    if(newName !== ""){
      const contactObject = {name: newName}

      if(!persons.some(person => person.name === contactObject.name)){
        setPersons(persons.concat(contactObject))
        setNewName("")
      }else{
        alert(`${newName} is already added to phonebook`)
      }
    }else{
      alert(`can't enter the same contact more than once`)
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addContact}>
        <div>
          <input placeholder='name' onChange={event=>setNewName(event.target.value)}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map(person => <Contacto key={person.name} person = {person}></Contacto>)}
      </ul>
    </div>
  )
}

export default App