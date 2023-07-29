import { Box,Button,Flex,Image,Text,Heading} from '@chakra-ui/react'
import React from 'react'
import {BiSolidRightArrowAlt} from 'react-icons/bi'


const ServicesSection = () => {


return(
    <Box  background={'linear-gradient(0deg, rgba(242,242,242,1) 2%, rgba(242,242,242,1) 12%, rgba(242,242,242,1) 30%, rgba(255,255,255,1) 100%)'}>
         <Flex justifyContent={'center'} mt={20} pt={10}>
        <Image src='https://demo.rstheme.com/wordpress/tekone/wp-content/uploads/2023/03/heart_beat_graph_dark.svg'/>
        <Text color={'#323F7C'} fontSize={'20px'} fontWeight={'700'} fontFamily={'"Space Grotesk", Sans-serif'}>Our Feachered Services</Text>
        <Image src='https://demo.rstheme.com/wordpress/tekone/wp-content/uploads/2023/03/heart_beat_graph_dark.svg'/>
      </Flex>
        <Text fontSize={'36px'} fontFamily={'"Space Grotesk", sans-serif'} letterSpacing={0} fontWeight='600' textAlign={'center'} color={'#002559'} mt={3} mb={10}>We run all kinds of IT services</Text>
        <Flex gap={'40px'} w='90%' m='auto' mb='40px' justifyContent='space-around'>
            <Box backgroundColor={'white'} backgroundImage={'https://demo.rstheme.com/wordpress/tekone/wp-content/uploads/2023/05/shape.png'} backgroundPosition={'bottom left'} _hover={{transform:'translateY(-15px)',transition:'transform 0.5s'}} backgroundRepeat={'no-repeat'} borderRadius={20} pb={'10px'}>
                <Image borderTopRadius={20} src='https://demo.rstheme.com/wordpress/tekone/wp-content/uploads/2023/04/about_service_1.png'/>
                <Box ml={'20px'} background={'#F79C53'} mt='-40px' position='absolute' borderRadius='50%' _hover={{background:'linear-gradient(135deg,rgb(2,3,129) 0%,rgb(40,116,252) 100%)'}} w={20} h={20}>
                    <Image padding={'15px'} h='auto' verticalAlign={'middle'} borderRadius='50%' src='https://demo.rstheme.com/wordpress/tekone/wp-content/uploads/2023/03/it-icon.png'/>
                </Box>
                <Box w='90%' m='auto'>
                <Text fontSize='24px' fontFamily={'"Space Grotesk", sans-serif'} color={'#002559'} fontWeight={'bold'} lineHeight={'36px'} mt={'60px'}>IT Solutions</Text>
                <Text fontWeight='400' color='#606060' fontFamily={'"Open Sans", sans-serif'} fontSize={'16px'} lineHeight={'28px'} mt={'20px'}>Bring to the table win-win survival strategies to ensure proactive domination.</Text>
                <Flex color={'#323F7C'} _hover={{color:'#002559'}} mt={'20px'} fontSize={'18px'} gap={'10px'}>
                    <Text fontWeight={600}>Read More</Text>
                    <Box pt={'5px'} fontSize={'20px'}>
                    <BiSolidRightArrowAlt/></Box>
                </Flex>
                </Box>
            </Box>
            <Box _hover={{transform:'translateY(-15px)',transition:'transform 0.5s'}} background='white' backgroundRepeat={'no-repeat'} backgroundImage={'https://demo.rstheme.com/wordpress/tekone/wp-content/uploads/2023/05/shape.png'} backgroundPosition={'bottom left'} borderRadius={20} pb={'10px'}>
                <Image borderTopRadius={20} w={'800px'} src='https://demo.rstheme.com/wordpress/tekone/wp-content/uploads/2023/04/services_img_5.png'/>
                <Box ml={'20px'} background={'#F79C53'} mt='-40px' position='absolute' borderRadius='50%' _hover={{background:'linear-gradient(135deg,rgb(2,3,129) 0%,rgb(40,116,252) 100%)'}} w={20} h={20}>
                    <Image padding={'15px'} h='auto' verticalAlign={'middle'} borderRadius='50%' src='https://demo.rstheme.com/wordpress/tekone/wp-content/uploads/2023/03/cyber-icon.png'/>
                </Box>
                <Box w='90%' m='auto'>
                <Text fontSize='24px' fontFamily={'"Space Grotesk", sans-serif'} color={'#002559'} fontWeight={'bold'} lineHeight={'36px'} mt={'60px'}>Digital Marketing</Text>
                <Text fontWeight='400' color='#606060' fontFamily={'"Open Sans", sans-serif'} fontSize={'16px'} lineHeight={'28px'} mt={'20px'}>Bring to the table win-win survival strategies to ensure proactive domination.</Text>
                <Flex color={'#323F7C'} _hover={{color:'#002559'}} mt={'20px'} fontSize={'18px'} gap={'10px'}>
                    <Text fontWeight={600}>Read More</Text>
                    <Box pt={'5px'} fontSize={'20px'}>
                    <BiSolidRightArrowAlt/></Box>
                </Flex>
                </Box>
            </Box>
            <Box _hover={{transform:'translateY(-15px)',transition:'transform 0.5s'}} background='white' backgroundRepeat={'no-repeat'} backgroundImage={'https://demo.rstheme.com/wordpress/tekone/wp-content/uploads/2023/05/shape.png'} backgroundPosition={'bottom left'} borderRadius={20} pb={'10px'}>
                <Image borderTopRadius={20} src='https://demo.rstheme.com/wordpress/tekone/wp-content/uploads/2023/04/service_img_4.png'/>
                <Box ml={'20px'} background={'#F79C53'} mt='-40px' position='absolute' borderRadius='50%' _hover={{background:'linear-gradient(135deg,rgb(2,3,129) 0%,rgb(40,116,252) 100%)'}} w={20} h={20}>
                    <Image padding={'15px'} h='auto' verticalAlign={'middle'} borderRadius='50%' src='https://demo.rstheme.com/wordpress/tekone/wp-content/uploads/2023/03/cloud-icon.png'/>
                </Box>
                <Box w='90%' m='auto'>
                <Text fontSize='24px' fontFamily={'"Space Grotesk", sans-serif'} color={'#002559'} fontWeight={'bold'} lineHeight={'36px'} mt={'60px'}>UI/UX Design</Text>
                <Text fontWeight='400' color='#606060' fontFamily={'"Open Sans", sans-serif'} fontSize={'16px'} lineHeight={'28px'} mt={'20px'}>Bring to the table win-win survival strategies to ensure proactive domination.</Text>
                <Flex color={'#323F7C'} _hover={{color:'#002559'}} mt={'20px'} fontSize={'18px'} gap={'10px'}>
                    <Text fontWeight={600}>Read More</Text>
                    <Box pt={'5px'} fontSize={'20px'}>
                    <BiSolidRightArrowAlt/></Box>
                </Flex>
                </Box>
            </Box>
        </Flex>
      

        <Flex gap={'40px'} w='90%' m='auto' pb={20} justifyContent='space-around'>
            <Box _hover={{transform:'translateY(-15px)',transition:'transform 0.5s'}} background='white' backgroundRepeat={'no-repeat'} backgroundImage={'https://demo.rstheme.com/wordpress/tekone/wp-content/uploads/2023/05/shape.png'} backgroundPosition={'bottom left'} borderRadius={20} pb={'10px'}>
                <Image borderTopRadius={20} src='https://demo.rstheme.com/wordpress/tekone/wp-content/uploads/2023/03/service4-image-1.png'/>
                <Box ml={'20px'} background={'#F79C53'} mt='-40px' position='absolute' borderRadius='50%' _hover={{background:'linear-gradient(135deg,rgb(2,3,129) 0%,rgb(40,116,252) 100%)'}} w={20} h={20}>
                    <Image padding={'15px'} h='auto' verticalAlign={'middle'} borderRadius='50%' src='https://demo.rstheme.com/wordpress/tekone/wp-content/uploads/2023/03/it-icon.png'/>
                </Box>
                <Box w='90%' m='auto'>
                <Text fontSize='24px' fontFamily={'"Space Grotesk", sans-serif'} color={'#002559'} fontWeight={'bold'} lineHeight={'36px'} mt={'60px'}>Cloud Services</Text>
                <Text fontWeight='400' color='#606060' fontFamily={'"Open Sans", sans-serif'} fontSize={'16px'} lineHeight={'28px'} mt={'20px'}>Bring to the table win-win survival strategies to ensure proactive domination.</Text>
                <Flex color={'#323F7C'} _hover={{color:'#002559'}} mt={'20px'} fontSize={'18px'} gap={'10px'}>
                    <Text fontWeight={600}>Read More</Text>
                    <Box pt={'5px'} fontSize={'20px'}>
                    <BiSolidRightArrowAlt/></Box>
                </Flex>
                </Box>
            </Box>
            <Box _hover={{transform:'translateY(-15px)',transition:'transform 0.5s'}} background='white' backgroundRepeat={'no-repeat'} backgroundImage={'https://demo.rstheme.com/wordpress/tekone/wp-content/uploads/2023/05/shape.png'} backgroundPosition={'bottom left'} borderRadius={20} pb={'10px'}>
                <Image borderTopRadius={20} src='https://demo.rstheme.com/wordpress/tekone/wp-content/uploads/2023/03/service4-image-3.png'/>
                <Box ml={'20px'} background={'#F79C53'} mt='-40px' position='absolute' borderRadius='50%' _hover={{background:'linear-gradient(135deg,rgb(2,3,129) 0%,rgb(40,116,252) 100%)'}} w={20} h={20}>
                    <Image padding={'15px'} h='auto' verticalAlign={'middle'} borderRadius='50%' src='https://demo.rstheme.com/wordpress/tekone/wp-content/uploads/2023/03/cyber-icon.png'/>
                </Box>
                <Box w='90%' m='auto'>
                <Text fontSize='24px' fontFamily={'"Space Grotesk", sans-serif'} color={'#002559'} fontWeight={'bold'} lineHeight={'36px'} mt={'60px'}>SEO Optimization</Text>
                <Text fontWeight='400' color='#606060' fontFamily={'"Open Sans", sans-serif'} fontSize={'16px'} lineHeight={'28px'} mt={'20px'}>Bring to the table win-win survival strategies to ensure proactive domination.</Text>
                <Flex color={'#323F7C'} _hover={{color:'#002559'}} mt={'20px'} fontSize={'18px'} gap={'10px'}>
                    <Text fontWeight={600}>Read More</Text>
                    <Box pt={'5px'} fontSize={'20px'}>
                    <BiSolidRightArrowAlt/></Box>
                </Flex>
                </Box>
            </Box>
            <Box _hover={{transform:'translateY(-15px)',transition:'transform 0.5s'}} background='white' backgroundRepeat={'no-repeat'} backgroundImage={'https://demo.rstheme.com/wordpress/tekone/wp-content/uploads/2023/05/shape.png'} backgroundPosition={'bottom left'} borderRadius={20} pb={'10px'}>
                <Image borderTopRadius={20} src='https://demo.rstheme.com/wordpress/tekone/wp-content/uploads/2023/03/service4-image-2.png'/>
                <Box ml={'20px'} background={'#F79C53'} mt='-40px' position='absolute' borderRadius='50%' _hover={{background:'linear-gradient(135deg,rgb(2,3,129) 0%,rgb(40,116,252) 100%)'}} w={20} h={20}>
                    <Image padding={'15px'} h='auto' verticalAlign={'middle'} borderRadius='50%' src='https://demo.rstheme.com/wordpress/tekone/wp-content/uploads/2023/03/cloud-icon.png'/>
                </Box>
                <Box w='90%' m='auto'>
                <Text fontSize='24px' fontFamily={'"Space Grotesk", sans-serif'} color={'#002559'} fontWeight={'bold'} lineHeight={'36px'} mt={'60px'}>Cyber Security</Text>
                <Text fontWeight='400' color='#606060' fontFamily={'"Open Sans", sans-serif'} fontSize={'16px'} lineHeight={'28px'} mt={'20px'}>Bring to the table win-win survival strategies to ensure proactive domination.</Text>
                <Flex color={'#323F7C'} _hover={{color:'#002559'}} mt={'20px'} fontSize={'18px'} gap={'10px'}>
                    <Text fontWeight={600}>Read More</Text>
                    <Box pt={'5px'} fontSize={'20px'}>
                    <BiSolidRightArrowAlt/></Box>
                </Flex>
                </Box>
            </Box>
        </Flex>
      
    </Box>
  )
}

export default ServicesSection
