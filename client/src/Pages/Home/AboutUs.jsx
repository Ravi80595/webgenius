import { Box,Button,Flex,Image,Text} from '@chakra-ui/react'
import React from 'react'
import {BsBookmarkCheckFill} from 'react-icons/bs'

const AboutUs = () => {


return (
    <Box background={'#6EC1E4'}>
      <Flex>
        <Box>
        <Image position={'absolute'} src='https://demo.rstheme.com/wordpress/tekone/wp-content/uploads/2023/05/about-drone-img-h5.png'/>
            <Image src='https://demo.rstheme.com/wordpress/tekone/wp-content/uploads/2023/05/about-main-img-h5.png'/>
            
        </Box>
        <Box>
            <Text>ABOUT US</Text>
            <Text fontSize='36px' lineHeight='45px' color={'#323F7C'} fontFamily={'"Space Grotesk", sans-serif'} fontWeight={'bold'}>We Believe That Every Problem Has A Solution</Text>
            <Text>Deliver beautiful emails that get opened and clicked every time. Personalized content to every subscriber. Fully customizable templates. Build relationships that lead to conversions.</Text>
            <Flex>
            <Flex><BsBookmarkCheckFill/> <Text>Internal Networking</Text></Flex>
            <Flex><BsBookmarkCheckFill/> <Text>Internal Networking</Text></Flex>
            </Flex>
            <Flex>
            <Flex><BsBookmarkCheckFill/> <Text>Internal Networking</Text></Flex>
            <Flex><BsBookmarkCheckFill/> <Text>Internal Networking</Text></Flex>
            </Flex>
            <Text>Rring to the table win-win survival strategies to ensure proactive domination. At the end of the day going forward.</Text>
            <Button>Discover More</Button>
        </Box>
      </Flex>
    </Box>
  )
}

export default AboutUs
