import './table.css'

export const Categories = () => {
  return (
    <div className="categories">
       
       <h3>Filter By Category :</h3>
        <select name="byCategory" id="byCategory">
            <option value="">Show All</option>
            <option value="Vegetables">Vegetables</option>
            <option value="Meat">Meat</option>
            <option value="Dry Food">Dry Food</option>
            <option value="Fish">Fish</option>
        </select>
      
        <button>Create New Item</button>
    </div>
  )
}
