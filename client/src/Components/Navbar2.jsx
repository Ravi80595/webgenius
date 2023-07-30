import { Box,Flex,Button,Text,Image } from '@chakra-ui/react'
import React from 'react'
import {BsSearchHeart} from 'react-icons/bs'
import { Link } from 'react-router-dom'

const Navbar2 = () => {



return (
    <Box background={'white'} zIndex={99999} position={'fixed'} w={'100%'}>
      <Flex p={5} justifyContent='space-around'>
        <Box w={'15%'}>
          <Image w={20} src='https://www.marketingmind.in/wp-content/uploads/2020/02/5.jpg'/>
        </Box>
        <Flex fontSize={'17px'} fontWeight={'600'} pt={2} color={'#323F7C'} w={'60%'} justifyContent='space-around'>
          <Link to='/'>
          <Box padding='10px 22px 10px 22px' borderRadius={'5px'} _hover={{background:"#b5d6f1",color:'blue'}}>Home</Box></Link>
          <Box padding='10px 22px 10px 22px' borderRadius={'5px'} _hover={{background:"#b5d6f1",color:'blue'}}>Services</Box>
          <Box padding='10px 22px 10px 22px' borderRadius={'5px'} _hover={{background:"#b5d6f1",color:'blue'}}>About us</Box>
          <Box padding='10px 22px 10px 22px' borderRadius={'5px'} _hover={{background:"#b5d6f1",color:'blue'}}>Blogs</Box>
          <Box padding='10px 22px 10px 22px' borderRadius={'5px'} _hover={{background:"#b5d6f1",color:'blue'}}>Contact us</Box>
          <Box padding='10px 22px 10px 22px' borderRadius={'5px'} _hover={{background:"#b5d6f1",color:'blue'}}>Success Storis</Box>
        </Flex>
        <Flex pt={3} w={'20%'} justifyContent={'center'} gap={10}>
          <Button _hover={{background:"blue",color:'white'}} color={'white'} fontSize={'1.15rem'} background={'#323F7C'} p='14px 36px 14px 36px' borderRadius={'6px'}>Get A Quote </Button>
        </Flex>
      </Flex>
    </Box>
  )
}

export default Navbar2