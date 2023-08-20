import React from 'react'
import {Box,Flex,Heading,Text,Image,Button} from '@chakra-ui/react'
import Navbar2 from '../../Components/Navbar2'
import Footer from '../../Components/Footer'
import {BiSolidRightArrowAlt} from 'react-icons/bi'
import {FaHome} from 'react-icons/fa'
import {BiSolidCloudDownload} from 'react-icons/bi'
import { Link } from 'react-router-dom'


const SeoOptimization = () => {


return (
    <Box>
    <Navbar2/>
    <Flex color={'white'} pt={90} justifyContent={'center'} backgroundImage={'https://demo.rstheme.com/wordpress/tekone/wp-content/uploads/2023/04/inner_bg.png'} backgroundRepeat={'no-repeat'} backgroundSize={'cover'} backgroundPosition={'center'} height={'450px'}>
    <Box pt={'100px'}>
      <Text fontSize={'64px'} fontFamily={'"Space Grotesk", sans-serif'} fontWeight={'bold'}>SEO Optimization</Text>
      <Flex fontSize={'18px'} gap={'10px'}>
      <Box pt={'5px'} fontSize={'20px'}>
        <FaHome/></Box>
        <Text>Home</Text>
        <Box pt={'5px'} fontSize={'20px'}>
        <BiSolidRightArrowAlt/></Box>
        <Text>Services</Text>
        <Box pt={'5px'} fontSize={'20px'}>
        <BiSolidRightArrowAlt/></Box>
        <Text>SEO Optimization</Text>
      </Flex>
    </Box>
    </Flex>
    <Box>
        <Flex gap={50} mt={'120px'}>
            <Box borderRadius={'50px'}>
                <Image ml={20} borderRadius={'20px'} src='https://demo.rstheme.com/wordpress/tekone/wp-content/uploads/2023/04/It-Solution.jpg'/>
            </Box>
            <Box mt={7}>
                <Heading fontSize={'36px'} lineHeight={'46px'} fontWeight={'700'} color={'#323F7C'} fontFamily={'"Space Grotesk", sans-serif'}>Categories</Heading>
                <Box><Link to='/itsolutions'>
                    <Flex color={'white'} backgroundImage={'linear-gradient(94.57deg, #513DE8 0.99%, #8366E3 99.43%)'} _hover={{backgroundImage:'linear-gradient(94.57deg, #513DE8 0.99%, #8366E3 99.43%)'}} borderRadius={'5px'} mt={5} backgroundColor={'#F3F1FD'} fontSize={"20px"} justifyContent={'space-between'} gap={'20px'} p={2} pl="70px" pr='60px'>
                    <Text> IT Solutions</Text>
                    <Box pt={'7px'} fontSize={'20px'}>
                    <BiSolidRightArrowAlt/></Box>
                    </Flex></Link>
                    <Link to='/cybersecurity'>
                    <Flex  _hover={{backgroundImage:'linear-gradient(94.57deg, #513DE8 0.99%, #8366E3 99.43%)', color:"white"}} borderRadius={'5px'} mt={5} backgroundColor={'#F3F1FD'} fontSize={"20px"} justifyContent={'space-between'} gap={'20px'} p={2} pl="70px" pr='60px'>
                    <Text>Cyber Security</Text>
                    <Box pt={'7px'} fontSize={'20px'}>
                    <BiSolidRightArrowAlt/></Box>
                    </Flex></Link>
                    <Link to='/cloudservices'>
                    <Flex _hover={{backgroundImage:'linear-gradient(94.57deg, #513DE8 0.99%, #8366E3 99.43%)', color:"white"}} borderRadius={'5px'} mt={5} backgroundColor={'#F3F1FD'} fontSize={"20px"} justifyContent={'space-between'} gap={'20px'} p={2} pl="70px" pr='60px'>
                    <Text> Cloud Services</Text>
                    <Box pt={'7px'} fontSize={'20px'}>
                    <BiSolidRightArrowAlt/></Box>
                    </Flex></Link>
                    <Link to='/seooptimization'>
                    <Flex  _hover={{backgroundImage:'linear-gradient(94.57deg, #513DE8 0.99%, #8366E3 99.43%)', color:"white"}} borderRadius={'5px'} mt={5} backgroundColor={'#F3F1FD'} fontSize={"20px"} justifyContent={'space-between'} gap={'20px'} p={2} pl="70px" pr='60px'>
                    <Text> SEO Optimization</Text>
                    <Box pt={'7px'} fontSize={'20px'}>
                    <BiSolidRightArrowAlt/></Box>
                    </Flex></Link>
                    <Link to='/digitalmarketing'>
                    <Flex  _hover={{backgroundImage:'linear-gradient(94.57deg, #513DE8 0.99%, #8366E3 99.43%)', color:"white"}} borderRadius={'5px'} mt={5} backgroundColor={'#F3F1FD'} fontSize={"20px"} justifyContent={'space-between'} gap={'20px'} p={2} pl="70px" pr='60px'>
                    <Text> Digital Marketing</Text>
                    <Box pt={'7px'} fontSize={'20px'}>
                    <BiSolidRightArrowAlt/></Box>
                    </Flex>
                    </Link>
                </Box>
            </Box>
        </Flex>
    </Box>

<Box w={'90%'} m='auto' mt={50}>
    <Heading fontSize={'36px'} lineHeight={'46px'} fontWeight={'700'} color={'#323F7C'} fontFamily={'"Space Grotesk", sans-serif'}>SEO Optimization</Heading>
    <Flex mt={5} justifyContent={'space-between'}>
    <Box w={'70%'}>
    <Text fontSize={'20px'} lineHeight={'32px'} color={'#606060'} fontFamily={'"Open Sans", sans-serif'}>Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate resource-leveling customer service for state of the art customer service. Objectively innovate empowered manufactured products whereas parallel platforms.</Text>
    <Box mt={5} h={'150px'} borderLeft={"10px solid #513DE8"} borderLeftRadius={"10px"} pt={'40px'} fontSize={'22px'} pl={'20px'}>
    “Proactively envisioned multimedia based expertise and cross-media growth strategies.
        Seamlessly visualize quality intellectual capital without superior.”
    </Box>
    <Text fontSize={'20px'} lineHeight={'32px'} color={'#606060'} fontFamily={'"Open Sans", sans-serif'} mt={5}>Proactively envisioned multimedia based expertise and cross-media growth strategies. Seamlessly visualize quality intellectual capital without superior collaboration and idea-sharing. Holistically
pontificate installed base portals after maintainable products.</Text>
    <Heading mt={9} fontSize={'36px'} lineHeight={'46px'} fontWeight={'700'} color={'#323F7C'} fontFamily={'"Space Grotesk", sans-serif'}>Working Challange</Heading>
    <Flex mt={9} justifyContent={'space-around'}>
        <Image w={400} src='https://demo.rstheme.com/wordpress/tekone/wp-content/uploads/2023/04/service-detail-small-img.jpg'/>
        <Box color={'#606060'} fontWeight={'400'} fontFamily={'"Open Sans", sans-serif'}>
            <Text fontSize='22px' mt={2}>Document the short and long term goals.</Text>
            <Text fontSize='22px' mt={2}>Document the short and long term goals.</Text>
            <Text fontSize='22px' mt={2}>Document the short and long term goals.</Text>
            <Text fontSize='22px' mt={2}>Document the short and long term goals.</Text>
            <Text fontSize='22px' mt={2}>Document the short and long term goals.</Text>
            <Text fontSize='22px' mt={2}>Document the short and long term goals.</Text>
        </Box>
    </Flex>
    <Heading mt={10} fontSize={'36px'} lineHeight={'46px'} fontWeight={'700'} color={'#323F7C'} fontFamily={'"Space Grotesk", sans-serif'}>Benefits with our service</Heading>
    <Flex mt={9}>
    <Box h={'150px'} borderLeft={"10px solid #513DE8"} borderLeftRadius={"10px"} pt={'40px'} pl={'20px'}>
    <Text>Flexiable Solutions</Text>
    <Text>Proactively envisioned multimedia based expertise and cross-media growth.</Text>
    </Box>
    <Box h={'150px'} borderLeft={"10px solid #513DE8"} borderLeftRadius={"10px"} pt={'40px'} pl={'20px'}>
    <Text>Flexiable Solutions</Text>
    <Text>Proactively envisioned multimedia based expertise and cross-media growth.</Text>
    </Box>
    </Flex>
    </Box>
    <Box w={'23%'}>
        <Box borderRadius={'10px'} backgroundImage={'https://demo.rstheme.com/wordpress/tekone/wp-content/uploads/2023/04/service-slidebar-bg1.jpg'} backgroundSize={'cover'} p={5}>
        <Text fontSize={'26px'} lineHeight={'46px'} fontWeight={'700'} color={'#323F7C'} fontFamily={'"Space Grotesk", sans-serif'}>Do you have a <br /> Technical <br /> Issues?</Text>
        <Flex w={'70%'} color={'white'} backgroundImage={'linear-gradient(94.57deg, #513DE8 0.99%, #8366E3 99.43%)'} _hover={{backgroundImage:'linear-gradient(94.57deg, #513DE8 0.99%, #8366E3 99.43%)'}} borderRadius={'5px'} mt={5} backgroundColor={'#F3F1FD'} fontSize={"18px"} gap={'10px'} p={2} pl="10px" pr='0px'>
        <Text>Find Solutions</Text>
        <Box pt={'7px'} fontSize={'18px'}>
        <BiSolidRightArrowAlt/></Box>
        </Flex>
        </Box>
        <Box mt={20} p={5}>
        <Heading fontSize={'26px'} lineHeight={'46px'} fontWeight={'700'} color={'#323F7C'} fontFamily={'"Space Grotesk", sans-serif'}>Download Brochure</Heading>
        <Flex w={'90%'} color={'white'} backgroundImage={'linear-gradient(94.57deg, #513DE8 0.99%, #8366E3 99.43%)'} _hover={{backgroundImage:'linear-gradient(94.57deg, #513DE8 0.99%, #8366E3 99.43%)'}} borderRadius={'5px'} mt={5} backgroundColor={'#F3F1FD'} fontSize={"22px"} gap={'40px'} p={2} pl="10px" pr='0px'>
        <Text>Download PDF</Text>
        <Box pt={'7px'} fontSize={'22px'}>
        <BiSolidCloudDownload/></Box>
        </Flex>
        <Flex w={'90%'} color={'white'} backgroundImage={'linear-gradient(94.57deg, #513DE8 0.99%, #8366E3 99.43%)'} _hover={{backgroundImage:'linear-gradient(94.57deg, #513DE8 0.99%, #8366E3 99.43%)'}} borderRadius={'5px'} mt={5} backgroundColor={'#F3F1FD'} fontSize={"20px"} gap={'40px'} p={2} pl="10px" pr='0px'>
        <Text>Download DOC</Text>
        <Box pt={'5px'} fontSize={'22px'}>
        <BiSolidCloudDownload/></Box>
        </Flex> 
        </Box>
    </Box>
    </Flex>
</Box>





    <Footer/>
    </Box>
  )
}

export default SeoOptimization