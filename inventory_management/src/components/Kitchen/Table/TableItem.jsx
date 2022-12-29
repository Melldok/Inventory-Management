

import axios from 'axios'
import { useState } from 'react'
import add from '../../../icons/add.png'
import substract from '../../../icons/substract.png'


export const TableItem = ({id,category, product_name, src, in_stock, storage}) => {


// Each row has its own state stock that can be changed with buttons

  const [stock, setStock] = useState(in_stock)

  const incrementStock = () => {
    setStock(stock + 1)
  }

  const decrementStock = () => {
    if(stock > 0){
      setStock(stock - 1)
    }
  
  }

  // Each element comes with its own id, so we use that id to send the Delete request to the backend

  const handleDelete = async ($id) => {
    try {
      await axios.delete(`http://localhost:8800/items/${id}`);
      window.location.reload()
    } catch (err) {
      console.log(err);
    }
  };

  const handleUpdate = async ($id) => {
    try {
      console.log("Update has been called")
      await axios.put(`http://localhost:8800/items/${id}`, {
        in_stock: stock
      });
      window.location.reload()
    } catch (err) {
      console.log(err);
    }
  };




  return (
    <tr category={category}>
        <td className='productName'><p>{product_name}</p></td>
        <td><img src={src} alt="" /></td>
        <td className='flex'>
          <button className='addition' onClick={incrementStock}><img className='imageAdd' src={add}/></button>
            <p>{stock}</p>
          <button className='addition' onClick={decrementStock}><img className='imageAdd' src={substract}/></button>
          </td>
        <td>{storage}</td>
        <td className='flex'>
          <button className='actionButtons' onClick={handleUpdate}>Update</button>
          <button className='actionButtons' onClick={handleDelete}>Delete</button>
        </td>
    </tr>
  )
}
