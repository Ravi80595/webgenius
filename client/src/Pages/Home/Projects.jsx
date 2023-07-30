import { Box,Text,Heading,Flex,Button, Image } from '@chakra-ui/react'
import React from 'react'
import {BiSolidRightArrowAlt} from 'react-icons/bi'
import '../../CSS/HomePage.css'

const Projects = () => {




return(
    <Box>
      <Flex justifyContent={'center'} gap='10px'>
      <Image src='https://demo.rstheme.com/wordpress/tekone/wp-content/uploads/2023/03/heart_beat_graph_dark.svg'/>
     <Text color={'#5944E8'} fontSize={'16px'} fontWeight={'bold'} fontFamily={'"Space Grotesk", sans-serif'}>OUR PROJECTS</Text>
     <Image src='https://demo.rstheme.com/wordpress/tekone/wp-content/uploads/2023/03/heart_beat_graph_dark.svg'/>
    </Flex>
      <Heading w='50%' m='auto' pb='80px' textAlign={'center'} fontSize={'36px'} lineHeight={'46px'} fontWeight={'bold'} color={'#323F7C'} fontFamily={'"Space Grotesk", sans-serif'}>Our Recent Launched Projects Available Into Market</Heading>





      <Flex color={'white'} w={'95%'} m={'auto'} justifyContent={'center'} gap='10px'>
      <Box className='image-container'>
        <Image className='image' src='https://demo.rstheme.com/wordpress/tekone/wp-content/uploads/2023/03/portfolio-4.jpg'/>
        <div className="blue-overlay"></div>
        <Box position={'absolute'} padding={'10px'} marginTop={'-120px'} borderTopRadius={20}>
          <Text fontSize={'25px'} fontWeight={'700'} fontFamily={'"Space Grotesk", sans-serif'} lineHeight={"35px"} mt={'10px'}>Infrastructure Upgrade</Text>
          <Flex justifyContent={'center'} color={'white'} _hover={{color:'#002559'}} mt={'20px'} fontSize={'18px'} gap={'10px'}>
                    <Text fontWeight={600}> View Details</Text>
                    <Box pt={'5px'} fontSize={'20px'}>
                    <BiSolidRightArrowAlt/></Box>
                </Flex>
        </Box>
      </Box>



      <Box className='image-container'>
        <Image className='image' src='https://demo.rstheme.com/wordpress/tekone/wp-content/uploads/2023/03/portfolio-6.jpg'/>
        <div className="blue-overlay"></div>
        <Box position={'absolute'} padding={'10px'} marginTop={'-120px'} borderTopRadius={20}>
          <Text fontSize={'25px'} fontWeight={'700'} fontFamily={'"Space Grotesk", sans-serif'} lineHeight={"35px"} mt={'10px'}>Innovation Technology</Text>
          <Flex justifyContent={'center'} color={'white'} _hover={{color:'#002559'}} mt={'20px'} fontSize={'18px'} gap={'10px'}>
                    <Text fontWeight={600}> View Details</Text>
                    <Box pt={'5px'} fontSize={'20px'}>
                    <BiSolidRightArrowAlt/></Box>
                </Flex>
        </Box>
      </Box>




      <Box className='image-container'>
        <Image className='image' src='https://demo.rstheme.com/wordpress/tekone/wp-content/uploads/2023/03/portfolio-5.jpg'/>
        <div className="blue-overlay"></div>
        <Box position={'absolute'} padding={'10px'} marginTop={'-120px'} borderTopRadius={20}>
          <Text fontSize={'25px'} fontWeight={'700'} fontFamily={'"Space Grotesk", sans-serif'} lineHeight={"35px"} mt={'10px'}>Data Visualization</Text>
          <Flex justifyContent={'center'} color={'white'} _hover={{color:'#002559'}} mt={'20px'} fontSize={'18px'} gap={'10px'}>
                    <Text fontWeight={600}> View Details</Text>
                    <Box pt={'5px'} fontSize={'20px'}>
                    <BiSolidRightArrowAlt/></Box>
                </Flex>
        </Box>
      </Box>






      <Box className='image-container'>
        <Image className='image' src='https://demo.rstheme.com/wordpress/tekone/wp-content/uploads/2023/03/portfolio-7.jpg'/>
        <div className="blue-overlay"></div>
        <Box position={'absolute'} padding={'10px'} marginTop={'-120px'} borderTopRadius={20}>
          <Text fontSize={'25px'} fontWeight={'700'} fontFamily={'"Space Grotesk", sans-serif'} lineHeight={"35px"} mt={'10px'}>Website Development</Text>
          <Flex justifyContent={'center'} color={'white'} _hover={{color:'#002559'}} mt={'20px'} fontSize={'18px'} gap={'10px'}>
                    <Text fontWeight={600}> View Details</Text>
                    <Box pt={'5px'} fontSize={'20px'}>
                    <BiSolidRightArrowAlt/></Box>
                </Flex>
        </Box>
      </Box>

      </Flex>
    </Box>
  )
}

export default Projects
