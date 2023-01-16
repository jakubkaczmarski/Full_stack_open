import { useState } from 'react'


const getRandomNum = () =>
{
  let val = Math.floor(Math.random() * (7 - 0 + 1) + 0)
  return val
}

const Button = ({val, name}) =>
{
  
  return (
    
    <button onClick={val}> {name} </button>
  )
}

const addPoint = (arrs, index) =>
{
  console.log(arrs)
  const cp = {...arrs}
  cp[index] += 1
  return cp
}
const Displaywinning = (points) =>
{
  let max = points[0]
  let index = 0
  for(let i = 1; i < 8 ; i++)
  {
      if(max < points[i])
      {
        max = points[i]
        index = i
      }
  }
  return (index)
}
const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  const points_arr = Array(8).fill(0)
  const [selected, setSelected] = useState(getRandomNum())
  const [points, set_points] = useState(points_arr)

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}
      <br/>
      has {points[selected]} votes
      <br/>
      <Button  val={() => set_points(addPoint(points, selected) )} name={"vote"}/>
      <Button  val={() => setSelected(getRandomNum())} name={"next anecdote"}/>
      <br/>
      <h1> Anecdote with the most votes </h1>
      <br/>
      {anecdotes[Displaywinning(points)]}
      <br/>
      has {points[Displaywinning(points)]}

    </div>
  )
}

export default App