import Contacto from "./Contacto"

const Persons = ({showFilter,eliminatePerson}) => {
    
    return(
    <ul>
        {showFilter.map(person => <Contacto key={person.name} person = {person} handleDelete={eliminatePerson}></Contacto>)}
    </ul>
)}

export default Persons