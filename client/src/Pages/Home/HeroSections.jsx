import { Box,Flex,Image,Text,Button,Heading } from '@chakra-ui/react'
import React from 'react'
import '../../CSS/MovingImage.css'

const HeroSections = () => {


return (
    <Box pt={100} background={'linear-gradient(0deg, rgba(255,255,255,1) 4%, rgba(228,254,254,1) 26%, rgba(164,236,232,0.8239670868347339) 52%, rgba(142,230,220,0.8323704481792717) 92%)'}>
        <Flex gap='50px' direction={['column-reverse','column-reverse','row','row']}>
            <Box w={['90%','90%','50%','50%']} m={'auto'} p={[0,0,0,10]} pt={'20px'}>
            <Text fontWeight='bold' color='#5944E8'>TECHNOLOGY SOLUTIONS</Text>
            <Heading color={'#323F7C'} fontSize={['20px','20px','60px','60px']} fontFamily='"Space Grotesk", sans-serif' lineHeight={['21px','70px','70px','70px']} letterSpacing={['0.7px','-2.1px','-2.1px','-2.1px']}>Digital Technology IT Solution Services Around the World</Heading>
            <Text pt={5} fontFamily='"Space Grotesk", sans-serif' fontSize={['16px','16px','18px','18px']} color={'#606060'} lineHeight={'1.6'}>Our process that relies on methods and techniques to taking raw data - mining for insights and years of experience will help you become the industry leader.</Text>
            <Button fontFamily={'"Open Sans", sans-serif'} mt={10} fontSize={'16px'} fontWeight={'bold'} p='19px 38px 19px 38px' backgroundImage={'linear-gradient(99.43deg, #513DE8 0.99%, #8366E3 99.43%)'} _hover={{color:'white'}} borderRadius={'30px'} color={'white'} lineHeight={'26px'}>Button 1</Button>
            <Button ml={5} fontFamily={'"Open Sans", sans-serif'} mt={10} fontSize={'16px'} fontWeight={'bold'} p='19px 38px 19px 38px' backgroundImage={'linear-gradient(99.43deg, #513DE8 0.99%, #8366E3 99.43%)'} _hover={{color:'white'}} borderRadius={'30px'} color={'white'} lineHeight={'26px'}>Button 2</Button>
            <Flex mt={10} direction={['column','column','row','row']}>
                <Image w={['180px','20px','20px','270px']} m={'auto'} src='https://demo.rstheme.com/wordpress/tekone/wp-content/uploads/2023/05/customer-avatar.png'/>
                <Text fontSize={['16px','16px','20px','20px']} lineHeight={['25px','35px','35px','35px']} color='#323F7C' letterSpacing={0} fontWeight='bold' fontFamily={'"Space Grotesk", sans-serif'}>Trusted By 5000+ Worldwide Brand & Customers</Text>
            </Flex>
            </Box>
            <Box w={['95%','95%','45%','45%']} m={'auto'} pt={['20px','20px','50px','50px']}>
                <Image className='moving-image' w={['70px','70px','170px','170px']} position='absolute' zIndex={9999} mt={'13%'} ml={'13vw'} src='https://demo.rstheme.com/wordpress/tekone/wp-content/uploads/2023/05/banner-ly5-h5.png'/>
                <Image src='https://demo.rstheme.com/wordpress/tekone/wp-content/uploads/2023/05/banner-ly-h5.png'/>
            </Box>
        </Flex>
    </Box>
  )
}

export default HeroSections
