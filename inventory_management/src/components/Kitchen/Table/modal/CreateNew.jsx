



import './CreateNew.css'
import { Modal } from './Modal';


export const CreateNew = () => {

    
  const handleOpenning = () => {
   // Handles the behavior of the modal window
    const modal = document.querySelector(".modal")
    modal.classList.toggle("show")
  }
  return (
    <>
       <button onClick={handleOpenning}>Create New Item</button>
       <Modal handleOpenning={handleOpenning}/>

    </>
  )
}
