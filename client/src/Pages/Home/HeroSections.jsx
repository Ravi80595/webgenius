import { Box,Flex,Image,Text,Button,Heading } from '@chakra-ui/react'
import React from 'react'

const HeroSections = () => {


  return (
    <Box>
        <Flex gap='50px'>
            <Box w='50%' p={20}>
            <Text fontWeight='bold' color='#5944E8'>TAGLINE HERE</Text>
            <Heading fontSize={'60px'} fontFamily={'Space Grotesk'} lineHeight='70px' letterSpacing={'-2.1px'}>Here we put headline of the website.</Heading>
            <Text fontFamily={'Open Sans, sans-serif'} fontSize='18px' color={'#606060'} lineHeight={'1.6'}>Here we put the descriiption text of the website. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quos ex repudiandae quam sit consequuntur eligendi, at nulla perferendis. Perspiciatis?</Text>
            <Button>Button 1</Button>
            <Button> Button 2</Button>
            <Flex mt={10}>
                <Image src='https://demo.rstheme.com/wordpress/tekone/wp-content/uploads/2023/05/customer-avatar.png'/>
                <Text fontSize={'20px'} lineHeight={'35px'} color='#323F7C' letterSpacing={0} fontWeight='bold' fontFamily={'"Space Grotesk", sans-serif'}>Trusted By 5000+ Worldwide Brand & Customers</Text>
            </Flex>
            </Box>
            <Box w='45%'>
                <Image position='absolute' src='https://demo.rstheme.com/wordpress/tekone/wp-content/uploads/2023/05/banner-ly5-h5.png'/>
                <Image src='https://demo.rstheme.com/wordpress/tekone/wp-content/uploads/2023/05/banner-ly-h5.png'/>
            </Box>
        </Flex>
    </Box>
  )
}

export default HeroSections
