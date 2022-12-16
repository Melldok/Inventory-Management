import { useState } from "react"
import { Link, NavLink, Route, Routes } from "react-router-dom"
import { Navigation, Table, SectionTitle, appContent } from "./components"



export const App = () => {

  return (
    
    <>
      <div className="container">
      <Navigation />
      <SectionTitle />
     </div>
    <Routes>
      <Route path="/" element/>
      <Route path="/Graphics" element={<appContent />}/>
      <Route path="/Kitchen" element/>
      <Route path="/Cart" element/>
      <Route path="/Shelf" element/>
    </Routes>
    </>
    

    
    
    
 
     
    
  )
}
