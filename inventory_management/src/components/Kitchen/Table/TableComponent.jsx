

import { useCategory } from '../../../helpers/categoryHook';
import { CreateNew } from './modal/CreateNew';
import './table.css'
import { TableItem } from './TableItem'








export const TableComponent = ({selectedStorage, setSelectedStorage}) => {



  
  const { handleCategoryChange, filteredList, filterByStorage, handleSearch } = useCategory()

  const filteredByStorage = filterByStorage(selectedStorage)



  const handleUnselectedStorage = () => {
    
    const allStorage = document.querySelectorAll('.clickable')
        
    allStorage.forEach(storage => {
        storage.classList.remove('clicked')
    });
    setSelectedStorage(false)

  }



  return (
    <div className="tableLayout">
        
      <div className="categories">
       
       <h3>Filter By Category :</h3>
        <select name="byCategory" id="byCategory" onChange={handleCategoryChange} onClick={handleUnselectedStorage}>
            <option value="">Show All</option>
            <option value="Vegetables">Vegetables</option>
            <option value="Meat">Meat</option>
            <option value="Dry Food">Dry Food</option>
            <option value="Fruit">Fruits</option>
            <option value="Fish">Fish</option>
        </select>
      
      <CreateNew />
      <input onChange={handleSearch} className="searchInput" type="text" name="" id="" placeholder="Search Item"/>
        
    </div>

  
      <div className='tableContainer'>
        <table>
          <thead>
            <tr>
              
              <th>Product Name</th>
              <th>Image</th>
              <th>In Stock</th>
              <th>Storage</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>

            
            

            { 
            
            selectedStorage ? 
            
            filteredByStorage.map((element, index) => (
              <TableItem {...element} key={index} />
            )) 

            : handleSearch ?

            filteredList.map((element, index) => (
              <TableItem {...element} key={index} />
            )) 
            
            : 
            
            filteredList.map((element, index) => (
              <TableItem {...element} key={index} />
            ))
             
             }

            
          </tbody>
        </table>
      </div>
    </div>
  )
}
