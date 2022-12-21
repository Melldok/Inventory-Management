
import { StorageLayout } from './StorageLayout/StorageLayout'
import { TableComponent } from './Table/TableComponent'
import './kitchenLayout.css'
import { useState } from 'react'

export const KitchenLayout = () => {



  const [selectedStorage, setSelectedStorage] = useState('')


  return (
    
    

    <div className='kitchenLayout'>
        <StorageLayout setSelectedStorage={setSelectedStorage} />
        <TableComponent selectedStorage={selectedStorage} setSelectedStorage={setSelectedStorage}/>
    </div>

    

  


   
  )
}


