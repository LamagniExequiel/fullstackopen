import Contacto from "./Contacto"

const Persons = ({showFilter}) => {return(
    <ul>
        {showFilter.map(person => <Contacto key={person.name} person = {person}></Contacto>)}
    </ul>
)}

export default Persons