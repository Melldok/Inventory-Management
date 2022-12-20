import { useState } from "react"
import { Route, Routes } from "react-router-dom"
import { Navigation, SectionTitle, KitchenLayout } from "./components"



export const App = () => {

return (
    
    <>
      <div className="container">
        <Navigation />
        <div className="appLayout">
          <SectionTitle />



            <Routes>
                
                <Route path="/" element/>
                <Route path="/Item_Performance" element/>
                <Route path="/Kitchen_Layout" element={<KitchenLayout />}/>
              
            </Routes>

      


        </div>
      </div>
    </>
    

    
    
    
 
     
    
  )
}
