import { Box,Button,Checkbox,Flex,Image,Input,Text, Textarea} from '@chakra-ui/react'
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

      <Box backgroundColor={'#ebfffb'} pb={'62px'} pt={20}>
        <Box backgroundColor={'white'} p={22} borderRadius={10} boxShadow='rgba(0, 0, 0, 0.24) 0px 3px 8px'  textAlign={'left'} w={['90%','60%','60%','50%']} m='auto' >
          <Text fontSize={['26px','26px','36px','36px']}>DROP US A LINE</Text>
          <Text pb={10}>Get in touch with our team by completing the below form or call us now. One of our customer service agents will get back to you shortly.</Text>
          <Box w={['90%','90%','60%','60%']} m='auto'>
          <Text pt={15}>Name</Text>
          <Input placeholder='Name'/>
          <Text pt={15}>Email</Text>
          <Input placeholder='Enter your email'/>
          <Text pt={15}>Phone no.</Text>
          <Input placeholder='Enter your phone'/>
          <Text pt={5}>Message</Text>
          <Textarea placeholder='Enter your message here'/>
          <Checkbox  pt={3} colorScheme='blue' defaultChecked>
            <Text fontSize={'16px'}>
            I consent to receiving phone calls from Upscaller.
            </Text>
          </Checkbox>
          <Flex  mt={5} justifyContent={'center'}><Button backgroundImage={'linear-gradient(99.43deg, #513DE8 0.99%, #8366E3 99.43%)'} _hover={{color:'white'}} borderRadius={'6px'} color={'white'} background={'blue'} textAlign={'center'}>Submit</Button></Flex>
          </Box>
          </Box>
        </Box>



      <Footer/>
    </Box>
  )
}

export default Contact
