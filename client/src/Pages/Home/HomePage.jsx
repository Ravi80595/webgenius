import React from 'react'
import HeroSections from './HeroSections'
import ServicesSection from './ServicesSection'
import AboutUs from './AboutUs'
import TechStacks from './TechStacks'
import Techs from './Techs'
import Projects from './Projects'
import Footer from '../../Components/Footer'
import Navbar from '../../Components/Navbar'

const HomePage = () => {


return (
    <div>
      <Navbar/>
      <HeroSections/>
      <ServicesSection/>
      <AboutUs/>
      <TechStacks/>
      <Techs/>
      <Projects/>
      <Footer/>
    </div>
  )
}

export default HomePage
