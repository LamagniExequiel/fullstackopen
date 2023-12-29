const Contacto = ({person,handleDelete}) =>{

    const returnID = (event) =>{
        if(confirm(`delete ${person.name} ?`)){
            handleDelete(person.id)
        }
    }
    
    return(
        <li>
            {person.name} {person.number}
            <button onClick={returnID}>delete</button>
        </li>
    )
    
}
export default Contacto