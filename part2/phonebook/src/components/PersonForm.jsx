const Form = (props) =>{

    return(<form onSubmit={props.addContact}>
        <div>
          name: <input type= "text" name='name' required placeholder='example: Juan Perez' onChange={props.handleName}/>
          <br/>
          number: <input type='text' name='number' required placeholder='example: 040-7654321' onChange={props.handleNumber}/>
        </div>
        <br/>
        <div>
          <button type="submit">add</button>
        </div>
    </form>)

}
export default Form