import React from 'react'
import {Routes,Route} from 'react-router-dom'
import HomePage from '../Pages/Home/HomePage'
import About from '../Pages/About'
import Contact from '../Pages/Contact'
import Services from '../Pages/Services'
import Blogs from '../Pages/Blogs'
import Success from '../Pages/Success'

const AllRoutes = () => {


return (
    <Routes>
        <Route path="/" element={<HomePage/>} />   
        <Route path="/about" element={<About/>} />   
        <Route path="/contact" element={<Contact/>} />   
        <Route path="/services" element={<Services/>} />  
        <Route path="/blogs" element={<Blogs/>} />  
        <Route path="/success" element={<Success/>} />  
    </Routes>
  )
}

export default AllRoutes
