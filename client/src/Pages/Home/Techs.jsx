import { Box,Flex,Image,Text } from '@chakra-ui/react'
import React from 'react'

const Techs = () => {


return (
    <Box>
      <Flex justifyContent={'center'} pt='88px' pb='270px'>
        <Image src='https://demo.rstheme.com/wordpress/tekone/wp-content/uploads/2023/03/heart_beat_graph_dark.svg'/>
        <Text color={'#323F7C'} fontSize={'20px'} fontWeight={'700'} fontFamily={'"Space Grotesk", Sans-serif'}>What Technology We Are Using For Our Valued Customers</Text>
        <Image src='https://demo.rstheme.com/wordpress/tekone/wp-content/uploads/2023/03/heart_beat_graph_dark.svg'/>
      </Flex>
    </Box>
  )
}

export default Techs
