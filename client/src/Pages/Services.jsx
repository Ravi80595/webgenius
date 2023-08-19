import { Box,Flex,Image,Text } from '@chakra-ui/react'
import React from 'react'
import Navbar2 from '../Components/Navbar2'
import Footer from '../Components/Footer'
import {BiSolidRightArrowAlt} from 'react-icons/bi'
import {FaHome} from 'react-icons/fa'
import ServicesSection from './Home/ServicesSection'
import WithSpeechBubbles from './Testimonials'


  
const Services = () => {

    
return (
    <Box>
      <Navbar2/>
      <Flex color={'white'} pt={90} justifyContent={'center'} backgroundImage={'https://demo.rstheme.com/wordpress/tekone/wp-content/uploads/2023/04/inner_bg.png'} backgroundRepeat={'no-repeat'} backgroundSize={'cover'} backgroundPosition={'center'} height={'450px'}>
      <Box pt={'100px'}>
        <Text fontSize={'64px'} fontFamily={'"Space Grotesk", sans-serif'} fontWeight={'bold'}>Services</Text>
        <Flex fontSize={'18px'} gap={'10px'}>
        <Box pt={'5px'} fontSize={'20px'}>
          <FaHome/></Box>
          <Text>Home</Text>
          <Box pt={'5px'} fontSize={'20px'}>
          <BiSolidRightArrowAlt/></Box>
          <Text>Services</Text>
        </Flex>
      </Box>
      </Flex>
      <ServicesSection/>


      <Flex w={'95%'} m='auto' mt={40} gap={'50px'}>
    <Box pr={'90px'} w={'50%'}>
    <Flex justifyContent={'left'}>
        <Image src='https://demo.rstheme.com/wordpress/tekone/wp-content/uploads/2023/03/heart_beat_graph_dark.svg'/>
        <Text color={'#323F7C'} fontSize={'20px'} fontWeight={'700'} fontFamily={'"Space Grotesk", Sans-serif'}>Why Choose Us</Text>
        <Image src='https://demo.rstheme.com/wordpress/tekone/wp-content/uploads/2023/03/heart_beat_graph_dark.svg'/>
      </Flex>
      <Text fontSize={'36px'} fontWeight={'700'} fontFamily={'"Space Grotesk", Sans-serif'} lineHeight={'1.33em'} color={'#323F7C'}>35+ Years of delivering custom It solutions services. </Text>
      <Text fontSize={'18px'} color={'#606060'} fontWeight={'400'} lineHeight={'1.6'} fontFamily={'"Open Sans", sans-serif'}>Bring to the table win-win survival strategies to ensure proactive domination At the end of the day. </Text>
    
    <Flex pt={5} gap={5}>
      <Box>
        <Image w={70} src='https://demo.rstheme.com/wordpress/tekone/wp-content/uploads/2023/03/service_shape_image_1.png'/>
      </Box>
      <Box pt={2}>
        <Text fontSize={'18px'} fontWeight={'700'} color={'#323F7C'} fontFamily={'"Space Grotesk", sans-serif'}>First Growing Process</Text>
        <Text pt={2} fontSize={'16px'} fontWeight={'400'} color={'#606060'} fontFamily={'"Space Grotesk", sans-serif'}>Bring to the table win-win survival strategies to ensur.</Text>
      </Box>
    </Flex>
    <Flex pt={5} gap={5}>
      <Box>
        <Image w={70} src='https://demo.rstheme.com/wordpress/tekone/wp-content/uploads/2023/04/clean_code_img.png'/>
      </Box>
      <Box pt={2}>
        <Text fontSize={'18px'} fontWeight={'700'} color={'#323F7C'} fontFamily={'"Space Grotesk", sans-serif'}>Clean code</Text>
        <Text pt={2} fontSize={'16px'} fontWeight={'400'} color={'#606060'} fontFamily={'"Space Grotesk", sans-serif'}>Leverage agile frameworks to provide a robust.</Text>
      </Box>
    </Flex>
    <Flex pt={5} gap={5}>
      <Box>
        <Image w={70} src='https://demo.rstheme.com/wordpress/tekone/wp-content/uploads/2023/04/well_document_svg_img.png'/>
      </Box>
      <Box pt={2}>
        <Text fontSize={'18px'} fontWeight={'700'} color={'#323F7C'} fontFamily={'"Space Grotesk", sans-serif'}>Well Documentation</Text>
        <Text pt={2} fontSize={'16px'} fontWeight={'400'} color={'#606060'} fontFamily={'"Space Grotesk", sans-serif'}>
Podcasting operational change management inside.</Text>
      </Box>
    </Flex>
    </Box>
    <Flex gap={5}>
      <Image borderRadius={'20px'} src='https://demo.rstheme.com/wordpress/tekone/wp-content/uploads/2023/04/service_progress_feature.png'/>
      <Image borderRadius={'20px'} w={300} h={300} src='https://demo.rstheme.com/wordpress/tekone/wp-content/uploads/2023/04/chose-right-right.jpg'/>
    </Flex>
</Flex>
<Box pt={90}>
</Box>
  <WithSpeechBubbles/>
      <Footer/>
    </Box>
  )
}

export default Services
