

import { useLocation } from 'react-router-dom'
import { Navigation } from '../Nav/Navigation'
import './sectionTitle.css'


export const SectionTitle = () => {

  const location = useLocation();
  const slicedLocation = location.pathname.slice(1)
  const currentLocation = slicedLocation.replace('_', ' ')
   

  return (
    <header>
      <h1>{currentLocation}</h1>
      
    </header>
    
  )
}
 