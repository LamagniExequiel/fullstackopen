const Notification = ({ message }) => {

    const styleMessage = {
        color: message !== null?(message.type?'green':'red'):'red',
        background: 'lightgrey',
        fontSize: 20,
        borderStyle: 'solid',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10
    }

    if (message === null) {
      return null
    }
  
    return (
      <div style={styleMessage}>
        {message.text}
      </div>
    )
  }
  
  export default Notification