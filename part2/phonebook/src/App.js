import axios from 'axios'
import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
// import axios from 'axios'
import services from './services/comunication'

// const baseUrl = 'http://localhost:3001/persons'



const handleDelete = (el_num, setPersons, persons) =>
{
  services.delete_entry(el_num)
  let per = [...persons]
  per.splice(el_num - 1, 1)

  let val = 1
  per.forEach(element => {
    element.id = val
    val++
  });
  setPersons(per)
}

const App = () => {


  const [persons, setPersons] = useState([])
  useEffect(() => {
    services.getAll().then(response => {
    setPersons(response.data)
  })}, [])
  
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
        if(window.confirm(`${newName.trim()} is already added to phonebook, replace the old number with a new one?`))
        {
          services.update(element.id, newNumber, newName)
          element.number = newNumber
        }
        idd--
        unique = false
      }
    });
    if(unique === true)
    {
      newpers.push(per)
      services.create(per)
    }
 
    setPersons(newpers)
  }
  
  const displayNames = (setPersons, Persons) =>
  {
    let val = []
    persons.forEach(el => {
      if(newSearch.trim().length === 0 || el.name.toLowerCase().includes(newSearch))
      val.push(
      <> {el.name} {el.number} 
      <button onClick={() => {
        if(!window.confirm(`Delete ${el.name}?`))
          return ;
        idd--
        handleDelete(el.id, setPersons, Persons)}}>Delete</button>
      <br/> 
      </>)  
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
      <Persons displayNames={displayNames} Persons={persons} setPersons={setPersons}/>
    
    </div>
  )
}

export default App