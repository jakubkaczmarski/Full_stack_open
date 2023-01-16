const Header = (props) =>
{
  console.log(Header);
  return (
    <h1> 
      {props.data.name}
    </h1>
  )
}

const Part = (props) =>
{
  return (
    <>
    <p>
      {props.data.name} {props.data.exercises}
    </p>
    </>
  )
}
const Content = (props) =>
{
  return (
    <div>
      <Part data = {props.data.parts[0]} />
      <Part data = {props.data.parts[1]} />
      <Part data = {props.data.parts[2]} />
    </div>
  )
}

const Total = (props) =>
{
  return (
    <>
    <p>
    Number of excersises {props.data.parts[0].exercises + props.data.parts[1].exercises + props.data.parts[2].exercises}
    </p>
    </>
  )
}

const App = () =>
{
  const course = {
    name: 'Half Stack application development',
    parts: 
    [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      } 
    ]
  }
  return (
    <div>
      <Header data = {course}/>
      <Content data = {course} />
      <Total data = {course} />
    </div>
  )
}

export default App;
