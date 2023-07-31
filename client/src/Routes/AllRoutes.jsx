import React from 'react'
import {Routes,Route} from 'react-router-dom'
import HomePage from '../Pages/Home/HomePage'
import About from '../Pages/About'
import Contact from '../Pages/Contact'
import Services from '../Pages/Services'

const AllRoutes = () => {


return (
    <Routes>
        <Route path="/" element={<HomePage/>} />   
        <Route path="/about" element={<About/>} />   
        <Route path="/contact" element={<Contact/>} />   
        <Route path="/services" element={<Services/>} />  
    </Routes>
  )
}

export default AllRoutes
