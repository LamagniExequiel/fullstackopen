import React, { useState } from 'react'
import Contacto from './components/Contacto'

const App = () => {

  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas',number: "040-1234567"}
  ]) 
  const [ newName, setNewName ] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const addContact = (event) => {

    event.preventDefault()
    
    if(newName !== ""){
      const contactObject = {name: newName, number: newNumber}

      if(!persons.some(person => person.name === contactObject.name)){
        setPersons(persons.concat(contactObject))
        setNewName("")
        setNewNumber("")
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
          name: <input required placeholder='example: Juan Perez' onChange={event=>setNewName(event.target.value)}/>
          <br/>
          number: <input required placeholder='example: 040-7654321' onChange={event=>setNewNumber(event.target.value)} pattern="[0-9]{3}-[0-9]{7}"/>
        </div>
        <br/>
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