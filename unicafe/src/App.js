import { useState } from 'react'

const Button = ({stateChange, name}) =>
{
  return (
    <button onClick={stateChange}> {name} </button>
  )
  
}

const Dis_val = ({name,value}) =>
{
  return (
    <>
    {name}  {value}
    </>
  )
}
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  const setBadval = () => 
  {
    setBad(bad + 1)
  }
  const setGoodval = () => 
  {
    setGood(good + 1)
  }
  const setNeutralval = () =>
  {
    setNeutral(neutral + 1)
  }
  const getPositivstat = (good, neutral, bad) =>
  {
    if(good === 0)
    {
      console.log("Kurwaaa")
      return 0
    }else{
      console.log("bad ", bad, "neutral ", neutral, "good ", good)
      let res = good / (good + neutral + bad) * 100
      if(res > 100)
        return (100)
      else{
        return res
      }
    }
  }

  return (
    <div>
      <h1> give feedback </h1>
      <br/>
      <Button stateChange={setGoodval} name = {"Good"}/>
      <Button stateChange={setNeutralval} name = {"Neutral"}/>
      <Button stateChange={setBadval} name = {"Bad"}/>
      
      <br/>
      <h1> statistics </h1>
      <br/>
      <Dis_val name={"good"} value={good}/>
      <br/>
      <Dis_val name={"neutral"} value={neutral}/>
      <br/>
      <Dis_val name={"bad"} value={bad}/>
      <br/>
      <Dis_val name={"average"} value={(good + neutral + bad ) / 3}/>
      <br/>
      <Dis_val name={"positive"} value={getPositivstat(good, neutral, bad) + "%"}/>
    </div>
  )
}

export default App
