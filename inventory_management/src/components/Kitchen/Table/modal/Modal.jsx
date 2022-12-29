
import axios from 'axios';
import { useState } from 'react';




// HandleOpenning is being inherit from the parent, to controll the modal behavior

export const Modal = ({handleOpenning}) => {

  

    // Handles items sent to the database with a useState hook

    const [item, setItem] = useState({
      product_name: "",
      in_stock : "", 
      category : "", 
      storage: ""

    })


    // setItem will set the state of item to the value the user writes on the inputs
    
    const handleChange = (e) => {
      setItem((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    // When the user clicks submit, we send the petition to the database

    const handleClick = async (e) => {
      const modal = document.querySelector('.modal')
      e.preventDefault();
      try {
        await axios.post("http://localhost:8800/items", item);
        window.location.reload()
      } catch (err) {
        console.log(err);
        setError(true)
      }
    };

    
    return (
    <div className="modal">
    <div className='head'>
    <h2>Create New</h2>
    <button className='close' onClick={handleOpenning}>close</button>
    </div>

    <form>
      <input 
        type="text" id='product_name' 
        name='product_name' 
        placeholder='Product name'
        onChange={handleChange}

        />
      <input 
        type="number" 
        name='in_stock' 
        placeholder='Amount' 
        onChange={handleChange}
        />
        <select name="category" id="category"  onChange={handleChange}>
          <option value="Vegetables">Vegetables</option>
          <option value="Meat">Meat</option>
          <option value="Fish">Fish</option>
          <option value="Dry Food">Dry Food</option>
          <option value="Fruits">Fruits</option>
        </select>
        <p className='update'>Upload Image</p>
        <select name="storage" id="storage" onChange={handleChange}>
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
        <input type="submit" value="Create" onClick={handleClick}/> 

    </form>
      
  </div>
  )
}
