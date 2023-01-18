


const Filter = ({newSearch, handleSearch}) =>
{
    return (
      <>
      <br/>
      filter shown with <input value={newSearch} onChange={handleSearch}/>
      </>
    )
}


export default Filter