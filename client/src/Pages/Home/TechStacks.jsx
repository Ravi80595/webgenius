import { Box,Flex,Text,Image } from '@chakra-ui/react'
import React from 'react'

const TechStacks = () => {



return (
    <Box background={'grey'}>
        <Flex justifyContent={'space-around'}>
            <Box w={'30%'}>
                <Text color={'#5944E8'} fontSize={'16px'} fontWeight={'bold'} fontFamily={'"Space Grotesk", sans-serif'}>WORK FOR ANY INDUSTRY</Text>
                <Text fontSize={'36px'} lineHeight={'46px'} fontWeight={'bold'} color={'#323F7C'} fontFamily={'"Space Grotesk", sans-serif'}>Best Solutions, For All Organizations</Text>
            </Box>
            <Box background={'white'} borderRadius={20} p={5}>
                <Image src='https://demo.rstheme.com/wordpress/tekone/wp-content/uploads/2023/05/atom.png'/>
            </Box>
            <Box background={'white'} borderRadius={20} p={5}>
                <Image src='https://demo.rstheme.com/wordpress/tekone/wp-content/uploads/2023/05/atom.png'/>
            </Box>
            <Box background={'white'} borderRadius={20} p={5}>
                <Image src='https://demo.rstheme.com/wordpress/tekone/wp-content/uploads/2023/05/atom.png'/>
            </Box>
        </Flex>



        <Flex mt={10} justifyContent={'space-around'}>
        <Box background={'white'} borderRadius={20} p={5}>
                <Image src='https://demo.rstheme.com/wordpress/tekone/wp-content/uploads/2023/05/atom.png'/>
            </Box> <Box background={'white'} borderRadius={20} p={5}>
                <Image src='https://demo.rstheme.com/wordpress/tekone/wp-content/uploads/2023/05/atom.png'/>
            </Box> <Box background={'white'} borderRadius={20} p={5}>
                <Image src='https://demo.rstheme.com/wordpress/tekone/wp-content/uploads/2023/05/atom.png'/>
            </Box> <Box background={'white'} borderRadius={20} p={5}>
                <Image src='https://demo.rstheme.com/wordpress/tekone/wp-content/uploads/2023/05/atom.png'/>
            </Box> <Box background={'white'} borderRadius={20} p={5}>
                <Image src='https://demo.rstheme.com/wordpress/tekone/wp-content/uploads/2023/05/atom.png'/>
            </Box> <Box background={'white'} borderRadius={20} p={5}>
                <Image src='https://demo.rstheme.com/wordpress/tekone/wp-content/uploads/2023/05/atom.png'/>
            </Box>
        </Flex>
    </Box>
  )
}

export default TechStacks
