



const PersonForm = ({newName, handleName, newNumber, handlenumber, handleadd}) => 
{
  return (
    <>
  <form>
     <h2>Add new</h2>
  <br/>
  <div>
    name: <input value={newName} onChange={handleName}/>
    number: <input value={newNumber} onChange={handlenumber}/>
  </div>
  <div>
    <button  type="submit" onClick={handleadd}>add</button>
    {/* <div>debug: {newName}</div> */}
  </div>
</form>
</>)
}


export default PersonForm