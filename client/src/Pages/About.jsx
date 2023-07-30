import { Box,Flex,Heading,Image,Text} from '@chakra-ui/react'
import React from 'react'
import Navbar2 from '../Components/Navbar2'
import {FaHome} from 'react-icons/fa'
import {BiSolidRightArrowAlt} from 'react-icons/bi'

const About = () => {


return (
    <Box>
      <Navbar2/>
      <Flex color={'white'} pt={90} justifyContent={'center'} backgroundImage={'https://demo.rstheme.com/wordpress/tekone/wp-content/uploads/2023/04/inner_bg.png'} backgroundRepeat={'no-repeat'} backgroundSize={'cover'} backgroundPosition={'center'} height={'450px'}>
      <Box pt={'100px'}>
        <Text fontSize={'64px'} fontFamily={'"Space Grotesk", sans-serif'} fontWeight={'bold'}>About</Text>
        <Flex fontSize={'18px'} gap={'10px'}>
        <Box pt={'5px'} fontSize={'20px'}>
          <FaHome/></Box>
          <Text>Home</Text>
          <Box pt={'5px'} fontSize={'20px'}>
          <BiSolidRightArrowAlt/></Box>
          <Text>About</Text>
        </Flex>
      </Box>
      </Flex>

      <Flex>
        <Box>

        </Box>
        <Box>
        <Flex justifyContent={'center'} mt={20} pt={10}>
        <Image src='https://demo.rstheme.com/wordpress/tekone/wp-content/uploads/2023/03/heart_beat_graph_dark.svg'/>
        <Text color={'#323F7C'} fontSize={'20px'} fontWeight={'700'} fontFamily={'"Space Grotesk", Sans-serif'}>Who We Are</Text>
        <Image src='https://demo.rstheme.com/wordpress/tekone/wp-content/uploads/2023/03/heart_beat_graph_dark.svg'/>
      </Flex>
      <Text fontSize={'36px'} fontWeight={'700'} fontFamily={'"Space Grotesk", sans-serif'} lineHeight={'1.33rem'} color={'#323F7C'}>We provide perfect it <span style={{color:'#513DE8', fontFamily:'"Space Grotesk", sans-serif'}}>solution & technology</span> for any startups.</Text>
      <Text>Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day going forward, a new normal that has evolved from operational X is on the runway.</Text>
        </Box>
      </Flex>




    </Box>
  )
}

export default About
