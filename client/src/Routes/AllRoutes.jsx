import React from 'react'
import {Routes,Route} from 'react-router-dom'
import HomePage from '../Pages/Home/HomePage'
import About from '../Pages/About'

const AllRoutes = () => {


return (
    <Routes>
        <Route path="/" element={<HomePage/>} />   
        <Route path="/about" element={<About/>} />      
    </Routes>
  )
}

export default AllRoutes
