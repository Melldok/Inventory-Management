
import { useState } from 'react'
import add from '../../../icons/add.png'
import substract from '../../../icons/substract.png'
import { AllItems } from './ddbb'

export const TableItem = ({category, product_name, img, in_stock, storage}) => {

  const [stock, setStock] = useState(in_stock)

  const incrementStock = () => {
    setStock(stock + 1)
  }

  const decrementStock = () => {
    if(stock > 0){
      setStock(stock - 1)
    }
  
  }




  return (
    <tr category={category}>
        <td>{product_name}</td>
        <td><img src={img} alt="" /></td>
        <td className='flex'>
          <button className='addition' onClick={incrementStock}><img className='imageAdd' src={add}/></button>
            <p>{stock}</p>
          <button className='addition' onClick={decrementStock}><img className='imageAdd' src={substract}/></button>
          </td>
        <td>{storage}</td>
        <td className='flex'>
          <button className='actionButtons'>Update</button>
          <button className='actionButtons'>Delete</button>
        </td>
    </tr>
  )
}
