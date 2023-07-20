import { Box,Flex,Button,Text } from '@chakra-ui/react'
import React from 'react'
import {BsSearchHeart} from 'react-icons/bs'

const Navbar = () => {



return (
    <Box>
      <Flex p={5} justifyContent='space-around'>
        <Box>
          Logo
        </Box>
        <Flex justifyContent='space-around'> 
          <Text>Home</Text>
          <Text>Services</Text>
          <Text>About us</Text>
          <Text>Blogs</Text>
          <Text>Contact us</Text>
          <Text>Success Stories</Text>
        </Flex>
        <Flex>
          <BsSearchHeart />
          <Button>Get A Quote </Button>
        </Flex>
      </Flex>
    </Box>
  )
}

export default Navbar
