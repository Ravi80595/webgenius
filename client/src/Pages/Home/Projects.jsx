import { Box,Text,Heading,Flex,Button, Image } from '@chakra-ui/react'
import React from 'react'

const Projects = () => {



return(
    <Box>
      <Text color={'#5944E8'} fontSize={'16px'} fontWeight={'bold'} fontFamily={'"Space Grotesk", sans-serif'}>OUR PROJECTS</Text>
      <Flex>
      <Heading  fontSize={'36px'} lineHeight={'46px'} fontWeight={'bold'} color={'#323F7C'} fontFamily={'"Space Grotesk", sans-serif'}>Our Recent Launched Projects Available Into Market</Heading>
      <Button>All Services</Button>
      </Flex>
      <Flex>
      <Box border='2px solid grey' borderRadius={20}>
                <Image borderTopRadius={20} src='https://demo.rstheme.com/wordpress/tekone/wp-content/uploads/2023/03/service4-image-1.png'/>
                <Box ml={'20px'} border='2px solid blue' mt='-40px' position='absolute' borderRadius='50%' w={20} h={20}></Box>
                <Box w='90%' m='auto'>
                <Text fontSize='24px' fontFamily={'"Space Grotesk", sans-serif'} color={'#002559'} fontWeight={'bold'} lineHeight={'36px'} mt={'60px'}>Tagline Here</Text>
                <Text fontWeight='bold' color='#606060' fontFamily={'"Open Sans", sans-serif'} fontSize={'16px'} lineHeight={'28px'} mt={'20px'}>Bring to the table win-win survival strategies to ensure proactive domination.</Text>
                <Button mb={'10px'} mt={'20px'}>Read More</Button>
                </Box>
            </Box>
            <Box border='2px solid grey' borderRadius={20}>
                <Image borderTopRadius={20} src='https://demo.rstheme.com/wordpress/tekone/wp-content/uploads/2023/03/service4-image-1.png'/>
                <Box ml={'20px'} border='2px solid blue' mt='-40px' position='absolute' borderRadius='50%' w={20} h={20}></Box>
                <Box w='90%' m='auto'>
                <Text fontSize='24px' fontFamily={'"Space Grotesk", sans-serif'} color={'#002559'} fontWeight={'bold'} lineHeight={'36px'} mt={'60px'}>Tagline Here</Text>
                <Text fontWeight='bold' color='#606060' fontFamily={'"Open Sans", sans-serif'} fontSize={'16px'} lineHeight={'28px'} mt={'20px'}>Bring to the table win-win survival strategies to ensure proactive domination.</Text>
                <Button mb={'10px'} mt={'20px'}>Read More</Button>
                </Box>
            </Box>
            <Box border='2px solid grey' borderRadius={20}>
                <Image borderTopRadius={20} src='https://demo.rstheme.com/wordpress/tekone/wp-content/uploads/2023/03/service4-image-1.png'/>
                <Box ml={'20px'} border='2px solid blue' mt='-40px' position='absolute' borderRadius='50%' w={20} h={20}></Box>
                <Box w='90%' m='auto'>
                <Text fontSize='24px' fontFamily={'"Space Grotesk", sans-serif'} color={'#002559'} fontWeight={'bold'} lineHeight={'36px'} mt={'60px'}>Tagline Here</Text>
                <Text fontWeight='bold' color='#606060' fontFamily={'"Open Sans", sans-serif'} fontSize={'16px'} lineHeight={'28px'} mt={'20px'}>Bring to the table win-win survival strategies to ensure proactive domination.</Text>
                <Button mb={'10px'} mt={'20px'}>Read More</Button>
                </Box>
            </Box>
      </Flex>
    </Box>
  )
}

export default Projects
