import {HamburgerIcon} from "@chakra-ui/icons"
import {
    Drawer,
    DrawerBody,
    DrawerOverlay,
    DrawerContent,
    useDisclosure,
    Button,
    DrawerCloseButton,
    Image,
    Tabs,
    TabList,
    Tab,
    Text,
    Flex,
    Box
  } from '@chakra-ui/react'
import {Link} from 'react-router-dom'
// import ScrollToTopLink from "./ScrollToTopLink";
// import Logo3 from '../Images/Logo3.png'

const MobNav = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()



return (
    <Flex justifyContent="space-between" alignItems="center" background='#a4ece8' width='100vw'>
       <Box pl={5}>
        <Link to='/home'>
          {/* <Image w={70} src={'Logo3'}/> */}
        <Text  fontWeight="bold" color='blue' pr='20px'>UpScaller</Text>
        </Link> 
      </Box>
      <Button p="8px" color="black" bg="#a4ece8" onClick={onOpen}>
        <HamburgerIcon  w="30px" h="30px" />
      </Button>
      <Drawer placement="right" onClose={onClose} isOpen={isOpen} size='full'>
        <DrawerOverlay />
        <DrawerContent>
        {/* <Image w="50px" src={Logo} backgroundColor='black'/> */}
        <DrawerCloseButton pt={['20px','10px']} mt={['10px',"50px"]} color='white'/>
          <DrawerBody className="drawer-box">
            <Flex mt="5px" m='20px' gap="20px" direction="column" >

                <Text>Home</Text>
                <Text>About Us</Text>
                <Text>Board</Text>
                <Text>Our Team</Text>
                <Text>Careers</Text>
                <Text>Contact us</Text>
            </Flex>
            {/* <Text mt="15px">MY ACCOUNT</Text> */}
            {/* <Flex direction="column">
                {/* <MobLogin name="Sign In" />  */}
                 {/* <MobLogin name="Register" /> */}
            {/* </Flex> */} 
          </DrawerBody>
        </DrawerContent>
      </Drawer>
     
      {/* <Flex gap="10px" mr="10px">
        <IoIosHeartEmpty className={styles.logo} />
        <BsBag className={styles.logo} />
      </Flex> */}
    </Flex>
  );
};

export default MobNav;