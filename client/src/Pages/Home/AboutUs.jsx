import { Box,Button,Flex,Image,Text} from '@chakra-ui/react'
import React from 'react'
import {BsBookmarkCheckFill} from 'react-icons/bs'
import '../../CSS/MovingImage.css'

const AboutUs = () => {


return(
    <Box background={'#edfaffa1'} pt={20}>
      <Flex direction={['column','column','row','row']}>
        <Box w={['95%','95%','50%','50%']}>
        <Image className='moving-image' w={['90px',180,180,180]} left={[190,150,350,350]} mt={20} position={'absolute'} src='https://demo.rstheme.com/wordpress/tekone/wp-content/uploads/2023/05/about-drone-img-h5.png'/>
            <Image w={['500px','500px','500px','500px']} src='https://demo.rstheme.com/wordpress/tekone/wp-content/uploads/2023/05/about-main-img-h5.png'/>
            
        </Box>
        <Box  w={['95%','95%','45%','45%']} m={'auto'}>
            <Text fontSize={'16px'} fontWeight='500' lineHeight={'26px'} color={'#5944E8'} fontFamily={'"Space Grotesk", sans-serif'}>ABOUT US</Text>
            <Text fontSize={['26px','36px','36px','36px']} lineHeight={['35px','35px','45px','45px']} color={'#323F7C'} fontFamily={'"Space Grotesk", sans-serif'} fontWeight={'bold'} mt={[0,0,0,2]} mb={4}>We Believe That Every Problem Has A Solution</Text>
            <Text fontSize={'17px'} lineHeight={'26px'} mb={5} fontFamily={'"Open Sans", sans-serif'} fontWeight='520' color={'#606060'}>Deliver beautiful emails that get opened and clicked every time. Personalized content to every subscriber. Fully customizable templates. Build relationships that lead to conversions.</Text>
            <Text fontSize={'26px'} fontWeight={'600'} lineHeight={'26px'} fontFamily={'"Space Grotesk", sans-serif'} color='#112437' mb={5}> <u> Top Features </u></Text>
            <Flex w={'99%'} direction={['column','column','row','row']} gap={2} mt={5} justifyContent={'space-around'} fontSize={'16px'} color={'#606060'} fontWeight={500}>
            <Flex w={['100%','100%','50%','50%']} gap={5}><BsBookmarkCheckFill/> <Text>Diversified Market Leadership</Text></Flex>
            <Flex w={['100%','100%','50%','50%']} gap={5}><BsBookmarkCheckFill/> <Text>Tech-Driven Efficiency</Text></Flex>
            </Flex>
            <Flex mt={3} direction={['column','column','row','row']} gap={2} mb={10} justifyContent={'space-around'} fontSize={'16px'} color={'#606060'} fontWeight={500}>
            <Flex w={['100%','100%','50%','50%']} gap={5}><BsBookmarkCheckFill/> <Text>Trusted One-Stop Shop</Text></Flex>
            <Flex w={['100%','100%','50%','50%']} gap={5}><BsBookmarkCheckFill/> <Text>Sustainable Growth</Text></Flex>
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
