import { Box,Flex,Button,Text,Image } from '@chakra-ui/react'
import React from 'react'
import {BsSearchHeart} from 'react-icons/bs'
import { Link } from 'react-router-dom'
import MobNav from './MobNav'
import '../CSS/Navbar.css'


const Navbar = () => {



return (
  <>
    <Box className='Laptop-view' background={'#a4ece8'} zIndex={9999999999} position={'fixed'} w={'100%'}>
      <Flex p={5} justifyContent='space-around'>
        <Box w={'15%'} mt={'-20px'}>
          <Image w={20} src='https://images.crunchbase.com/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/gxt3hziljushbzsr1paz'/>
        </Box>
        <Flex fontSize={'17px'} fontWeight={'600'} marginTop={'-0px'} color={'#323F7C'} w={'50%'} justifyContent='space-around'>
          <Link to='/'>
          <Box padding='10px 22px 10px 22px' borderRadius={'5px'} _hover={{background:"#b5d6f1",color:'blue'}}>Home</Box></Link>
          <Link to='/services'>
          <Box padding='10px 22px 10px 22px' borderRadius={'5px'} _hover={{background:"#b5d6f1",color:'blue'}}>Services</Box></Link>
          <Link to='/about'>
          <Box padding='10px 22px 10px 22px' borderRadius={'5px'} _hover={{background:"#b5d6f1",color:'blue'}}>About us</Box></Link>
          <Link to='/blogs'>
          <Box padding='10px 22px 10px 22px' borderRadius={'5px'} _hover={{background:"#b5d6f1",color:'blue'}}>Blogs</Box></Link>
          <Link to='/contact'>
          <Box padding='10px 22px 10px 22px' borderRadius={'5px'} _hover={{background:"#b5d6f1",color:'blue'}}>Contact us</Box></Link>
          {/* <Link to='/success'> */}
          {/* <Box padding='10px 22px 10px 22px' borderRadius={'5px'} _hover={{background:"#b5d6f1",color:'blue'}}>Success Stories</Box></Link> */}
        </Flex>
        <Flex marginTop={'-10px'} pt={3} w={'20%'} justifyContent={'center'} gap={10}>
          <Button _hover={{background:"blue",color:'white'}} color={'white'} fontSize={'1.15rem'} background={'#323F7C'} p='14px 36px 14px 36px' borderRadius={'6px'}>Get A Quote </Button>
        </Flex>
      </Flex>
    </Box>
    <div className='mobileDiv'>
            <MobNav/>
        </div>
    </>
  )
}

export default Navbar
