const Header = ({ course }) => <h1>{course.name}</h1>

const Total = ({ sum }) => <h3> <p>Total of {sum}</p> </h3>

const Part = ({ part }) => 
{
  return (
  <p>
    {part.name} {part.exercises}
  </p>
  )
}

const Content = ({ parts }) => 
{
  let itemList=[];
  parts.forEach((item,index)=>{
    itemList.push( <Part part={item}/>)
  })
  return (
    <>
    {itemList}
    </>
  )
}

const Course = ({course}) =>
{
    return (
      <>
      <Header course={course} /> 
      <Content parts={course.parts} />
      <Total sum={course.parts.reduce((sum, part) => {
        return sum + part.exercises
      }, 0)} />
      </>
    )
}



export default Course;