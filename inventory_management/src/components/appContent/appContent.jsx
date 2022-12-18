import { useLocation } from 'react-router-dom'
import { KitchenLayout } from '../Kitchen/KitchenLayout';
import  './AppContent.css'


export const AppContent = () => {


  const location = useLocation();

  return (
    
    <KitchenLayout />
  
  )
}
