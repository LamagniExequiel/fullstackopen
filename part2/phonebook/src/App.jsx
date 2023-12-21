import React, { useState } from 'react'
import Contacto from './components/Contacto'

const App = () => {
  //datos de contactos
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 
  //use satate para modificar el nombre y el numero
  const [ newName, setNewName ] = useState('')
  const [newNumber, setNewNumber] = useState('')
  
  //constante para almacenar la lista a mostrar
  const [showFilter,setFilter] = useState(persons)
  
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

  //funcion para filtrar por name el array persons
  const handleFilterName = (event) => {
    setFilter(persons.filter(person => person.name.toLowerCase().includes(event.target.value.toLowerCase())))
    console.log(showFilter,"hola")
  }

  // console.log(showFilter.length === 0? persons: showFilter);
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addContact}>
        <div>
          name: <input type= "text" name='name' required placeholder='example: Juan Perez' onChange={event=>setNewName(event.target.value)}/>
          <br/>
          number: <input type='number' name='number' required placeholder='example: 040-7654321' onChange={event=>setNewNumber(event.target.value)}/>
        </div>
        <br/>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      filter show with: <input type='text' name='filter' placeholder='insert name' onChange={handleFilterName}/>
      <ul>
        {showFilter.map(person => <Contacto key={person.name} person = {person}></Contacto>)}
      </ul>
    </div>
  )
}

export default App