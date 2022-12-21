

import { useEffect, useMemo, useState } from 'react';
import { useCategory } from '../../../helpers/categoryHook';
//import { AllItems } from './ddbb';
import './table.css'
import { TableItem } from './TableItem'



export const TableComponent = ({selectedStorage, setSelectedStorage}) => {

  
  const { itemList, selectedCategory, defaultItems, handleCategoryChange, getFilteredList, filteredList, filterByStorage} = useCategory()

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
            <option value="Fish">Fish</option>
        </select>
      
        <button>Create New Item</button>
    </div>

  
      <div className='tableContainer'>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Product Name</th>
              <th>Image</th>
              <th>In Stock</th>
              <th>Storage</th>
            </tr>
          </thead>
          <tbody>
            

            { 
            
            selectedStorage ? 
            
            filteredByStorage.map((element, index) => (
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
