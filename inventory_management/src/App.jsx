import { useState } from "react"
import { Route, Routes } from "react-router-dom"
import { Navigation, Table, SectionTitle, AppContent, KitchenLayout } from "./components"



export const App = () => {

return (
    
    <>
      <div className="container">
        <Navigation />
        <div className="appLayout">
          <SectionTitle />

          <AppContent >

            <Routes>
                
                <Route path="/" element/>
                <Route path="/Item_Performance" element/>
                <Route path="/Kitchen_Layout" element={<KitchenLayout />}/>
              
            </Routes>

        </AppContent>


        </div>
      </div>
    </>
    

    
    
    
 
     
    
  )
}
