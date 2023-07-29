import { Box,Flex,Text,Image } from '@chakra-ui/react'
import React from 'react'

const TechStacks = () => {


    // box-shadow: ;
return (
    <Box background={'#f8f8f8'} pt={'80px'} pb={'80px'}>
        <Flex justifyContent={'space-around'}>
            <Box  w={'30%'}>
                <Text color={'#5944E8'} fontSize={'16px'} fontWeight={'bold'} fontFamily={'"Space Grotesk", sans-serif'}>WORK FOR ANY INDUSTRY</Text>
                <Text fontSize={'36px'} lineHeight={'46px'} fontWeight={'bold'} color={'#323F7C'} fontFamily={'"Space Grotesk", sans-serif'}>Best Solutions, For All Organizations</Text>
            </Box>
            <Box _hover={{transform:'translateY(-15px)',transition:'transform 0.5s'}} box-shadow='rgba(0, 0, 0, 0.35) 0px 5px 15px' p='50px' background={'white'} borderRadius={20}>
                <Image w='70px' src='https://demo.rstheme.com/wordpress/tekone/wp-content/uploads/2023/05/atom.png'/>
            </Box>
            <Box _hover={{transform:'translateY(-15px)',transition:'transform 0.5s'}} p='50px' background={'white'} borderRadius={20}>
                <Image w='70px' src='https://demo.rstheme.com/wordpress/tekone/wp-content/uploads/2023/05/dollar-bag.png'/>
            </Box>
            <Box _hover={{transform:'translateY(-15px)',transition:'transform 0.5s'}} p='50px' background={'white'} borderRadius={20}>
                <Image w='70px' src='https://demo.rstheme.com/wordpress/tekone/wp-content/uploads/2023/05/medkit.png'/>
            </Box>
        </Flex>



        <Flex mt={10} justifyContent={'space-around'}>
        <Box _hover={{transform:'translateY(-15px)',transition:'transform 0.5s'}} p='50px' background={'white'} borderRadius={20} >
                <Image w='70px' src='https://demo.rstheme.com/wordpress/tekone/wp-content/uploads/2023/05/diamond.png'/>
            </Box> 
        <Box _hover={{transform:'translateY(-15px)',transition:'transform 0.5s'}} p='50px' background={'white'} borderRadius={20}>
                <Image w='70px' src='https://demo.rstheme.com/wordpress/tekone/wp-content/uploads/2023/05/film-reel.png'/>
            </Box>
        <Box _hover={{transform:'translateY(-15px)',transition:'transform 0.5s'}} p='50px' background={'white'} borderRadius={20} >
                <Image w='70px' src='https://demo.rstheme.com/wordpress/tekone/wp-content/uploads/2023/05/strategy.png'/>
            </Box> <Box _hover={{transform:'translateY(-15px)',transition:'transform 0.5s'}} p='50px' background={'white'} borderRadius={20}>
                <Image w='70px' src='https://demo.rstheme.com/wordpress/tekone/wp-content/uploads/2023/05/target.png'/>
            </Box> <Box _hover={{transform:'translateY(-15px)',transition:'transform 0.5s'}} p='50px' background={'white'} borderRadius={20}>
                <Image w='70px' src='https://demo.rstheme.com/wordpress/tekone/wp-content/uploads/2023/05/target.png'/>
            </Box>
             {/* <Box background={'white'} borderRadius={20} p={5}>
                <Image src='https://demo.rstheme.com/wordpress/tekone/wp-content/uploads/2023/05/idea.png'/>
            </Box> */}
        </Flex>
    </Box>
  )
}

export default TechStacks
