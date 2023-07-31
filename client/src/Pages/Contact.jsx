import { Box,Flex,Image,Text} from '@chakra-ui/react'
import React from 'react'
import Navbar2 from '../Components/Navbar2'
import {BiSolidRightArrowAlt} from 'react-icons/bi'
import {FaHome} from 'react-icons/fa'
import Footer from '../Components/Footer'


const Contact = () => {


return (
    <Box>
    <Navbar2/>  
    <Flex color={'white'} pt={90} justifyContent={'center'} backgroundImage={'https://demo.rstheme.com/wordpress/tekone/wp-content/uploads/2023/04/inner_bg.png'} backgroundRepeat={'no-repeat'} backgroundSize={'cover'} backgroundPosition={'center'} height={'450px'}>
      <Box pt={'100px'}>
        <Text fontSize={'64px'} fontFamily={'"Space Grotesk", sans-serif'} fontWeight={'bold'}>Contact</Text>
        <Flex fontSize={'18px'} gap={'10px'}>
        <Box pt={'5px'} fontSize={'20px'}>
          <FaHome/></Box>
          <Text>Home</Text>
          <Box pt={'5px'} fontSize={'20px'}>
          <BiSolidRightArrowAlt/></Box>
          <Text>Contact</Text>
        </Flex>
      </Box>
      </Flex>




      <Footer/>
    </Box>
  )
}

export default Contact
