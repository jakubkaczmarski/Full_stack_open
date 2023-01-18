import { useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  let idd = persons.length
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newSearch, setNewSearch] = useState('')
  const handlename = (e) =>
  {
    setNewName(e.target.value)
  }
  const handleadd = (e) =>
  {
    e.preventDefault()
    let newpers = []
    newpers = [...persons]
    let per = {name: newName.trim(), number: newNumber.trim(), id: ++idd}
    var unique = true
    newpers.forEach(element => {
      if(element.name.trim() === newName.trim())
      {
        unique = false
      }
    });
    if(unique === true)
      newpers.push(per)
    else
    {
      window.alert(`${newName.trim()} is already added to phonebook`)
      idd--
    }
    console.log(newpers)
    setPersons(newpers)
  }

  const displayNames = () =>
  {
    let val = []  
    persons.forEach(el => {
      if(newSearch.trim().length === 0 || el.name.toLowerCase().includes(newSearch))
      val.push(<> {el.name} {el.number}<br/> </>)  
    });
    return val
  }
  const handleSearch = (e) =>
  {
    setNewSearch(e.target.value)
  }
  const handlenumber = (e) =>
  {
    setNewNumber(e.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter newSearch={newSearch} handleSearch={handleSearch}/>
      
      <PersonForm newName={newName} handleName={handlename} newNumber={newNumber} handlenumber={handlenumber}
          handleadd = {handleadd}/>
       
      
      <h2>Numbers</h2>
      <Persons displayNames={displayNames}/>
    
    </div>
  )
}

export default App