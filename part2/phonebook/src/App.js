import { useState } from 'react'



const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ])
  
  const [newName, setNewName] = useState('')
  const handlename = (e) =>
  {
    setNewName(e.target.value)
  }
  const handleadd = (e) =>
  {
    e.preventDefault()
    let newpers = []
    newpers = [...persons]
    newpers.push(e.target.value)
    setPersons(newpers)
  }
  
  const displayNames = () =>
  {
    let val = []  
    persons.forEach(el => {
      console.log(el.name)
      val.push(<> {el.name} </>) 
    });
    return val
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input value={newName} onChange={handlename}/>
        </div>
        <div>
          <button  type="submit" onClick={handleadd}>add</button>
          <div>debug: {newName}</div>
        </div>
      </form>
      <h2>Numbers</h2>
      {displayNames()}
    </div>
  )
}

export default App