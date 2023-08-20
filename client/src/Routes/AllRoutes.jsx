import React from 'react'
import {Routes,Route} from 'react-router-dom'
import HomePage from '../Pages/Home/HomePage'
import About from '../Pages/About'
import Contact from '../Pages/Contact'
import Services from '../Pages/Services'
import Blogs from '../Pages/Blogs'
import Success from '../Pages/Success'
import ItSolutions from '../Pages/ServicesPages/ItSolutions'
import CyberSecurity from '../Pages/ServicesPages/CyberSecurity'
import DigitalMarketing from '../Pages/ServicesPages/DigitalMarketing'
import SeoOptimization from '../Pages/ServicesPages/SeoOptimization'
import UiUxDesign from '../Pages/ServicesPages/UiUxDesign'



const AllRoutes = () => {


return (
    <Routes>
        <Route path="/" element={<HomePage/>} />   
        <Route path="/about" element={<About/>} />   
        <Route path="/contact" element={<Contact/>} />   
        <Route path="/services" element={<Services/>} />  
        <Route path="/blogs" element={<Blogs/>} />  
        <Route path="/success" element={<Success/>} />  
        <Route path="/itsolutions" element={<ItSolutions/>} /> 
        <Route path="/cybersecurity" element={<CyberSecurity/>} />  
        <Route path="/digitalmarketing" element={<DigitalMarketing/>} />
        <Route path="/seooptimization" element={<SeoOptimization/>} />  
        <Route path="/uiuxdesign" element={<UiUxDesign/>} /> 
    </Routes>
  )
}


export default AllRoutes