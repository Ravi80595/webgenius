import { Box,Button,Flex,Heading,Image,Text} from '@chakra-ui/react'
import React from 'react'
import Navbar2 from '../Components/Navbar2'
import {FaHome} from 'react-icons/fa'
import {BiSolidRightArrowAlt} from 'react-icons/bi'
import Footer from '../Components/Footer'
import { Link } from 'react-router-dom'

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

      <Flex gap={'50px'} w={'90%'} m={'auto'} mt={'100px'}>
        <Box w={'50%'}>
        <Image src='https://img.freepik.com/premium-photo/male-hand-pushing-network-digital-icons-data-protection-internet-security_220873-7766.jpg'/>
        </Box>
        <Box w={'50%'}>
        <Flex justifyContent={'left'}>
        <Image src='https://demo.rstheme.com/wordpress/tekone/wp-content/uploads/2023/03/heart_beat_graph_dark.svg'/>
        <Text color={'#323F7C'} fontSize={'20px'} fontWeight={'700'} fontFamily={'"Space Grotesk", Sans-serif'}>Who We Are</Text>
        <Image src='https://demo.rstheme.com/wordpress/tekone/wp-content/uploads/2023/03/heart_beat_graph_dark.svg'/>
      </Flex>
      <Text fontSize={'36px'} fontWeight={'700'} fontFamily={'"Space Grotesk", Sans-serif'} lineHeight={'1.33em'} color={'#323F7C'}>We provide perfect it <span style={{color:'#513DE8', fontFamily:'"Space Grotesk", Sans-serif'}}>solution & technology</span> for any startups.</Text>
      <Text fontSize={'18px'} color={'#606060'} fontWeight={'400'} lineHeight={'1.6'} fontFamily={'"Open Sans", sans-serif'}>Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day going forward, a new normal that has evolved from operational X is on the runway.
      <br /><br />
      Rring to the table win-win survival strategies to ensure proactive domination. At the end of the day going forward.
      </Text>
      <Link to='/services'>
      <Button ml={5} fontFamily={'"Open Sans", sans-serif'} mt={10} fontSize={'20px'} fontWeight={'500'} p='15px 30px 16px 30px' pt={'30px'} pb={'30px'} backgroundImage={'linear-gradient(99.43deg, #513DE8 0.99%, #8366E3 99.43%)'} _hover={{color:'white'}} borderRadius={'6px'} color={'white'} lineHeight={'26px'}>Discover More</Button></Link>
        </Box>
      </Flex>


<Flex w={'95%'} m='auto' mt={40} gap={'50px'}>
    <Box pr={'90px'} w={'50%'}>
    <Flex justifyContent={'left'}>
        <Image src='https://demo.rstheme.com/wordpress/tekone/wp-content/uploads/2023/03/heart_beat_graph_dark.svg'/>
        <Text color={'#323F7C'} fontSize={'20px'} fontWeight={'700'} fontFamily={'"Space Grotesk", Sans-serif'}>Why Choose Us</Text>
        <Image src='https://demo.rstheme.com/wordpress/tekone/wp-content/uploads/2023/03/heart_beat_graph_dark.svg'/>
      </Flex>
      <Text fontSize={'36px'} fontWeight={'700'} fontFamily={'"Space Grotesk", Sans-serif'} lineHeight={'1.33em'} color={'#323F7C'}>Reasons to count on us </Text>
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
        <Image w={70} src='https://demo.rstheme.com/wordpress/tekone/wp-content/uploads/2023/03/service_shape_image_2.png'/>
      </Box>
      <Box pt={2}>
        <Text fontSize={'18px'} fontWeight={'700'} color={'#323F7C'} fontFamily={'"Space Grotesk", sans-serif'}>Dedicated Support 24/7</Text>
        <Text pt={2} fontSize={'16px'} fontWeight={'400'} color={'#606060'} fontFamily={'"Space Grotesk", sans-serif'}>Leverage agile frameworks to provide a robust.</Text>
      </Box>
    </Flex>
    <Flex pt={5} gap={5}>
      <Box>
        <Image w={70} src='https://demo.rstheme.com/wordpress/tekone/wp-content/uploads/2023/03/service_shape_image_3.png'/>
      </Box>
      <Box pt={2}>
        <Text fontSize={'18px'} fontWeight={'700'} color={'#323F7C'} fontFamily={'"Space Grotesk", sans-serif'}>Clean Code Design</Text>
        <Text pt={2} fontSize={'16px'} fontWeight={'400'} color={'#606060'} fontFamily={'"Space Grotesk", sans-serif'}>
Podcasting operational change management inside.</Text>
      </Box>
    </Flex>
    </Box>
    <Box>
      <Image src='https://demo.rstheme.com/wordpress/tekone/wp-content/uploads/2023/04/about_choose_us_img.png'/>
    </Box>
</Flex>



<Flex w={'90%'} m={'auto'} justifyContent={'space-around'} mt={'90px'}>
  <Box borderRadius={'10px'} p={'32px 36px'} pl={'56px'} pr={'56px'} backgroundImage={'https://demo.rstheme.com/wordpress/tekone/wp-content/uploads/2023/03/dotted-shape.png'} backgroundPosition={'top center'} backgroundSize={'contain'} backgroundRepeat={'no-repeat'} textAlign={'center'} backgroundColor={'#F8F7FD'} alignContent={'center'}>
    <Image w={'48px'} m={'auto'} pb={3} src='https://demo.rstheme.com/wordpress/tekone/wp-content/uploads/2023/03/mobile-device.png'/>
    <Text color={'#513DE8'} fontSize={'36px'} fontWeight={'700'} lineHeight={'48px'} fontFamily={'"Space Grotesk", Sans-serif'} pb={3}>780+</Text>
    <Text color={'#323F7C'} fontSize={'18px'}fontWeight={'500'} fontFamily={'"Space Grotesk", Sans-serif'}>Apps <br /> Developed </Text>
  </Box>


  <Box borderRadius={'10px'} p={'32px 36px'} pl={'56px'} pr={'56px'} backgroundImage={'https://demo.rstheme.com/wordpress/tekone/wp-content/uploads/2023/03/dotted-shape.png'} backgroundPosition={'top center'} backgroundSize={'contain'} backgroundRepeat={'no-repeat'} textAlign={'center'} backgroundColor={'#F8F7FD'} alignContent={'center'}>
    <Image w={'58px'} m={'auto'} pb={3} src='https://demo.rstheme.com/wordpress/tekone/wp-content/uploads/2023/03/desktop-device.png'/>
    <Text color={'#513DE8'} fontSize={'36px'} fontWeight={'700'} lineHeight={'48px'} fontFamily={'"Space Grotesk", Sans-serif'} pb={3}>1200+</Text>
    <Text color={'#323F7C'} fontSize={'18px'}fontWeight={'500'} fontFamily={'"Space Grotesk", Sans-serif'}>Website <br /> Developed </Text>
  </Box>


  <Box borderRadius={'10px'} p={'32px 36px'} pl={'56px'} pr={'56px'} backgroundImage={'https://demo.rstheme.com/wordpress/tekone/wp-content/uploads/2023/03/dotted-shape.png'} backgroundPosition={'top center'} backgroundSize={'contain'} backgroundRepeat={'no-repeat'} textAlign={'center'} backgroundColor={'#F8F7FD'} alignContent={'center'}>
    <Image w={'58px'} m={'auto'} pb={3} src='https://demo.rstheme.com/wordpress/tekone/wp-content/uploads/2023/03/customer-service-3.png'/>
    <Text color={'#513DE8'} fontSize={'36px'} fontWeight={'700'} lineHeight={'48px'} fontFamily={'"Space Grotesk", Sans-serif'} pb={3}>3020+</Text>
    <Text color={'#323F7C'} fontSize={'18px'}fontWeight={'500'} fontFamily={'"Space Grotesk", Sans-serif'}>Happy <br /> Clients </Text>
  </Box>


  <Box borderRadius={'10px'} p={'32px 36px'} pl={'56px'} pr={'56px'} backgroundImage={'https://demo.rstheme.com/wordpress/tekone/wp-content/uploads/2023/03/dotted-shape.png'} backgroundPosition={'top center'} backgroundSize={'contain'} backgroundRepeat={'no-repeat'} textAlign={'center'} backgroundColor={'#F8F7FD'} alignContent={'center'}>
    <Image w={'58px'} m={'auto'} pb={3} src='https://demo.rstheme.com/wordpress/tekone/wp-content/uploads/2023/03/db-server-2.png'/>
    <Text color={'#513DE8'} fontSize={'36px'} fontWeight={'700'} lineHeight={'48px'} fontFamily={'"Space Grotesk", Sans-serif'} pb={3}>320+</Text>
    <Text color={'#323F7C'} fontSize={'18px'}fontWeight={'500'} fontFamily={'"Space Grotesk", Sans-serif'}>Data <br /> Science </Text>
  </Box>


  <Box borderRadius={'10px'} p={'32px 36px'} pl={'56px'} pr={'56px'} backgroundImage={'https://demo.rstheme.com/wordpress/tekone/wp-content/uploads/2023/03/dotted-shape.png'} backgroundPosition={'top center'} backgroundSize={'contain'} backgroundRepeat={'no-repeat'} textAlign={'center'} backgroundColor={'#F8F7FD'} alignContent={'center'}>
    <Image w={'55px'} m={'auto'} pb={3} src='https://demo.rstheme.com/wordpress/tekone/wp-content/uploads/2023/03/document.png'/>
    <Text color={'#513DE8'} fontSize={'36px'} fontWeight={'700'} lineHeight={'48px'} fontFamily={'"Space Grotesk", Sans-serif'} pb={3}>2700+</Text>
    <Text color={'#323F7C'} fontSize={'18px'}fontWeight={'500'} fontFamily={'"Space Grotesk", Sans-serif'}>Projects <br /> Delivered </Text>
  </Box>
</Flex>

<Box mt={'90px'}>
<Flex justifyContent={'center'}>
        <Image src='https://demo.rstheme.com/wordpress/tekone/wp-content/uploads/2023/03/heart_beat_graph_dark.svg'/>
        <Text color={'#323F7C'} fontSize={'20px'} fontWeight={'700'} fontFamily={'"Space Grotesk", Sans-serif'}>More than 5K+ Brands with work Tekone</Text>
        <Image src='https://demo.rstheme.com/wordpress/tekone/wp-content/uploads/2023/03/heart_beat_graph_dark.svg'/>
      </Flex>

      <Flex w={'96%'} m={'auto'} mt={'40px'} justifyContent={'space-around'}>
        <Image w={'150px'} src='https://demo.rstheme.com/wordpress/tekone/wp-content/uploads/2023/03/partner1.png'/>
        <Image w={'150px'} src='https://demo.rstheme.com/wordpress/tekone/wp-content/uploads/2023/03/partner8.png'/>
        <Image w={'150px'} src='https://demo.rstheme.com/wordpress/tekone/wp-content/uploads/2023/03/partner7.png'/>
        <Image w={'150px'} src='https://demo.rstheme.com/wordpress/tekone/wp-content/uploads/2023/03/partner3.png'/>
        <Image w={'150px'} src='https://demo.rstheme.com/wordpress/tekone/wp-content/uploads/2023/03/partner2.png'/>
        <Image w={'150px'} src='https://demo.rstheme.com/wordpress/tekone/wp-content/uploads/2023/03/partner1.png'/>
      </Flex>
</Box>


<Footer/>
    </Box>
  )
}

export default About
