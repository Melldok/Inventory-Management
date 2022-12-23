
import './CreateNew.css'


export const CreateNew = () => {


  const handleOpenning = () => {
    
    const modal = document.querySelector(".modal")

    modal.classList.toggle("show")
  }

  return (
    <>
       <button onClick={handleOpenning}>Create New Item</button>

        <div className="modal show">
          <div className='head'>
          <h2>Create New</h2>
          <button onClick={handleOpenning}>close</button>
          </div>

          <form>
            <label For="product_name">Product Name <input type="text" id='product_name' name='product_name'/></label>
           Stock: <input type="number" name='in_stock' />
            <select name="category" id="category">
              <option value="Vegetables">Vegetables</option>
              <option value="Meat">Meat</option>
              <option value="Fish">Fish</option>
              <option value="Dry Food">Dry Food</option>
            </select>

          </form>
            
        </div>

    </>
 


    
  )
}
