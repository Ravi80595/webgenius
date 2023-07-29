import { Box,Button,Flex,Image,Text} from '@chakra-ui/react'
import React from 'react'
import {BsBookmarkCheckFill} from 'react-icons/bs'
import '../../CSS/MovingImage.css'

const AboutUs = () => {


return (
    <Box background={'#edfaffa1'} pt={20}>
      <Flex>
        <Box w={'50%'}>
        <Image className='moving-image' w={180} left={350} mt={20} position={'absolute'} src='https://demo.rstheme.com/wordpress/tekone/wp-content/uploads/2023/05/about-drone-img-h5.png'/>
            <Image src='https://demo.rstheme.com/wordpress/tekone/wp-content/uploads/2023/05/about-main-img-h5.png'/>
            
        </Box>
        <Box w={'45%'}>
            <Text fontSize={'16px'} fontWeight='500' lineHeight={'26px'} color={'#5944E8'} fontFamily={'"Space Grotesk", sans-serif'}>ABOUT US</Text>
            <Text fontSize='36px' lineHeight='45px' color={'#323F7C'} fontFamily={'"Space Grotesk", sans-serif'} fontWeight={'bold'} mt={2} mb={4}>We Believe That Every Problem Has A Solution</Text>
            <Text fontSize={'17px'} lineHeight={'26px'} mb={5} fontFamily={'"Open Sans", sans-serif'} fontWeight='520' color={'#606060'}>Deliver beautiful emails that get opened and clicked every time. Personalized content to every subscriber. Fully customizable templates. Build relationships that lead to conversions.</Text>
            <Text fontSize={'26px'} fontWeight={'600'} lineHeight={'26px'} fontFamily={'"Space Grotesk", sans-serif'} color='#112437' mb={5}> <u> Top Features </u></Text>
            <Flex mt={5} justifyContent={'space-around'} fontSize={'16px'} color={'#606060'} fontWeight={500}>
            <Flex gap={5}><BsBookmarkCheckFill/> <Text>Drag & Drop Newsletter Editor</Text></Flex>
            <Flex gap={5}><BsBookmarkCheckFill/> <Text>Content A/B Testing</Text></Flex>
            </Flex>
            <Flex mt={3} mb={10} justifyContent={'space-around'} fontSize={'16px'} color={'#606060'} fontWeight={500}>
            <Flex gap={5}><BsBookmarkCheckFill/> <Text>Subject Line A/B Testing</Text></Flex>
            <Flex gap={5}><BsBookmarkCheckFill/> <Text>Internal Networking</Text></Flex>
            </Flex>
            <Text>Rring to the table win-win survival strategies to ensure proactive domination. At the end of the day going forward.</Text>
            <Button mt={5} backgroundImage={'linear-gradient(99.43deg, #513DE8 0.99%, #8366E3 99.43%)'}
            borderRadius={'30px'} padding='21px 50px 21px 50px' color={'white'} fontSize={'16px'} fontWeight='500' lineHeight={'22px'} _hover={{color:'white'}}>Discover More</Button>
        </Box>
      </Flex>
    </Box>
  )
}

export default AboutUs
