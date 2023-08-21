import { Box } from '@chakra-ui/react'
import React from 'react'
import '../CSS/HomePage.css'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

const PrivacyPolicy = () => {


  return (
    <Box>
        <Navbar/>
        <div className="privacy-policy">
      <h1>Privacy Policy</h1>
      <p>
        [Your IT Development Company Name] ("us", "we", or "our") operates the
        [Website URL] website (the "Service").
      </p>
      
      <h2>Information Collection and Use</h2>
      <p>
        For a better experience while using our Service, we may require you to
        provide us with certain personally identifiable information, including but
        not limited to [types of information collected].
      </p>
      
      <h2>Log Data</h2>
      <p>
        We want to inform you that whenever you visit our Service, we collect
        information that your browser sends to us that is called Log Data. This Log
        Data may include information such as your computer's Internet Protocol
        ("IP") address, browser version, pages of our Service that you visit, the
        time and date of your visit, the time spent on those pages, and other
        statistics.
      </p>
      
      {/* Add more sections as needed */}
    </div>
    <Footer/>
    </Box>
  )
}



export default PrivacyPolicy