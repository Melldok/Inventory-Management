
import { useForm } from 'react-hook-form'
import { AllItems } from '../ddbb'




export const Modal = ({handleOpenning}) => {

    const {register, handleSubmit} = useForm();

    const onSubmit = (data) => {
        AllItems.push(data)
    }



  return (
    <div className="modal">
    <div className='head'>
    <h2>Create New</h2>
    <button className='close' onClick={handleOpenning}>close</button>
    </div>

    <form onSubmit={handleSubmit(onSubmit)}>
    <input 
      type="text" id='product_name' 
      name='productName' 
      placeholder='Product name'
      {...register('product_name', {
        required: true,

      })}
      />
    <input 
      type="number" 
      name='in_stock' 
      placeholder='Amount' 
      {...register('in_stock' , {
        required: true,
        
      })}
      />
      <select name="category" id="category"  {...register('category' , {
        required: true,
        
      })}>
        <option value="Vegetables">Vegetables</option>
        <option value="Meat">Meat</option>
        <option value="Fish">Fish</option>
        <option value="Dry Food">Dry Food</option>
        <option value="Dry Food">Fruits</option>
      </select>
      <button value="https://source.unsplash.com/30x30" {...register('img')}>Upload Image</button>
      <select name="storage" id="storage" {...register('storage' , {
        required: true,
        
      })}>
        <option value="M1">M1</option>
        <option value="M2">M2</option>
        <option value="M3">M3</option>
        <option value="V1">V1</option>
        <option value="V2">V2</option>
        <option value="V3">V3</option>
        <option value="F1">F1</option>
        <option value="F2">F2</option>
        <option value="D1">D1</option>
        <option value="D2">D2</option>
        <option value="D3">D3</option>
        <option value="D4">D4</option>
        <option value="FR1">FR1</option>
        <option value="FR2">FR2</option>
        <option value="FR3">FR3</option>
      </select>
      <input type="submit" value="Create" onClick={handleOpenning}/> 

    </form>
      
  </div>
  )
}
