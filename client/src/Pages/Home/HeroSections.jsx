import { Box,Flex,Image,Text,Button,Heading } from '@chakra-ui/react'
import React from 'react'
import '../../CSS/MovingImage.css'

const HeroSections = () => {


return (
    <Box pt={100} background={'linear-gradient(0deg, rgba(255,255,255,1) 4%, rgba(228,254,254,1) 26%, rgba(164,236,232,0.8239670868347339) 52%, rgba(142,230,220,0.8323704481792717) 92%)'}>
        <Flex gap='50px'>
            <Box w='50%' p={10} pt={'40px'}>
            <Text fontWeight='bold' color='#5944E8'>TAGLINE HERE</Text>
            <Heading color={'#323F7C'} fontSize={'60px'} fontFamily='"Space Grotesk", sans-serif' lineHeight='70px' letterSpacing={'-2.1px'}>Digital Technology IT Solution Services Around the World</Heading>
            <Text pt={5} fontFamily='"Space Grotesk", sans-serif' fontSize='18px' color={'#606060'} lineHeight={'1.6'}>Our process that relies on methods and techniques to taking raw data - mining for insights and years of experience will help you become the industry leader.</Text>
            <Button fontFamily={'"Open Sans", sans-serif'} mt={10} fontSize={'16px'} fontWeight={'bold'} p='19px 38px 19px 38px' backgroundImage={'linear-gradient(99.43deg, #513DE8 0.99%, #8366E3 99.43%)'} _hover={{color:'white'}} borderRadius={'30px'} color={'white'} lineHeight={'26px'}>Button 1</Button>
            <Button ml={5} fontFamily={'"Open Sans", sans-serif'} mt={10} fontSize={'16px'} fontWeight={'bold'} p='19px 38px 19px 38px' backgroundImage={'linear-gradient(99.43deg, #513DE8 0.99%, #8366E3 99.43%)'} _hover={{color:'white'}} borderRadius={'30px'} color={'white'} lineHeight={'26px'}>Button 2</Button>
            <Flex mt={10}>
                <Image src='https://demo.rstheme.com/wordpress/tekone/wp-content/uploads/2023/05/customer-avatar.png'/>
                <Text fontSize={'20px'} lineHeight={'35px'} color='#323F7C' letterSpacing={0} fontWeight='bold' fontFamily={'"Space Grotesk", sans-serif'}>Trusted By 5000+ Worldwide Brand & Customers</Text>
            </Flex>
            </Box>
            <Box w='45%' pt={'50px'}>
                <Image className='moving-image' position='absolute' zIndex={9999} mt={'13%'} ml={'13vw'} src='https://demo.rstheme.com/wordpress/tekone/wp-content/uploads/2023/05/banner-ly5-h5.png'/>
                <Image src='https://demo.rstheme.com/wordpress/tekone/wp-content/uploads/2023/05/banner-ly-h5.png'/>
            </Box>
        </Flex>
    </Box>
  )
}

export default HeroSections
