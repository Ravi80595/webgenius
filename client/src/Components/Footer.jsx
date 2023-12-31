import { Box, Flex, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";
import styles from '../CSS/footer.module.css'
import { BsFacebook, BsInstagram, BsYoutube, BsTwitter } from "react-icons/bs";
import { Link } from "react-router-dom";


const Footer = () => {


return (
  <div zIndex={999999999} className={styles.container}>
  <Flex color='#FFFFFF' direction={['column','column','row','row']} justify="space-between">
    <Box gap="10px">
      <Text fontSize="24px" fontFamily={'"Space Grotesk", sans-serif'} fontWeight="700">
        Company
      </Text>
      <Link to='/about'>
    <Text fontSize="18px" fontFamily={'"Open Sans", sans-serif'} fontWeight="400" cursor="pointer">About us</Text></Link>
    <Link to='/contact'>
    <Text fontSize="18px" fontFamily={'"Open Sans", sans-serif'} fontWeight="500" cursor="pointer">Contact us</Text></Link>
    <Text fontSize="18px" fontFamily={'"Open Sans", sans-serif'} fontWeight="500" cursor="pointer">Blog</Text>
    </Box>
    <Box gap="10px">
    <Text fontSize="24px" fontFamily={'"Space Grotesk", sans-serif'} fontWeight="700">Our Services</Text>
    <Text fontSize="18px" fontFamily={'"Open Sans", sans-serif'} fontWeight="500" cursor="pointer">IT Managment</Text>
    <Text fontSize="18px" fontFamily={'"Open Sans", sans-serif'} fontWeight="500" cursor="pointer">IT Solutions</Text>
    <Text fontSize="18px" fontFamily={'"Open Sans", sans-serif'} fontWeight="500" cursor="pointer">Product Design</Text>
    <Text fontSize="18px" fontFamily={'"Open Sans", sans-serif'} fontWeight="500" cursor="pointer">SEO Optimization </Text>
    </Box>
    <Box gap="10px">
    <Text fontSize="24px" fontFamily={'"Space Grotesk", sans-serif'} fontWeight="700">Need Help</Text>
    <Text fontSize="18px" fontFamily={'"Open Sans", sans-serif'} fontWeight="500" cursor="pointer"> FAQ'S</Text>
    <Text fontSize="24px" fontFamily={'"Space Grotesk", sans-serif'} fontWeight="700" paddingTop="20px"> Policy Info</Text>
    <Text fontSize="18px" fontFamily={'"Open Sans", sans-serif'} fontWeight="500" cursor="pointer">Privacy Policy</Text>
    <Text fontSize="18px" fontFamily={'"Open Sans", sans-serif'} fontWeight="500" cursor="pointer">Terms of Use</Text>
    </Box>
    <Box gap="10px" marginRight="20px">
      <Text fontSize="16px" fontWeight="700">
        Follow us on
      </Text>
      <Flex gap="25px" mt={5}>  
        <a href="https://www.instagram.com/zenoo186/ "target="blank">
        <BsInstagram
          style={{ width: "25px", height: "25px", cursor: "pointer" }}
        /></a>
        <a href="https://www.facebook.com/zenoo18"target="blank">
        <BsFacebook
          style={{ width: "25px", height: "25px", cursor: "pointer" }}
        /></a>
        <BsYoutube
          style={{ width: "25px", height: "25px", cursor: "pointer" }}
        />
        <a href="https://twitter.com/ZENOO719261821" target="blank">
        <BsTwitter
          style={{ width: "25px", height: "25px", cursor: "pointer" }}
        /></a>
      </Flex>
      {/* <Text color={'white'}>info@zenoo.in</Text> */}
    </Box>
  </Flex>
  {/* <Box gap="10px" marginBottom="40px" marginTop="60px">
    <Text fontSize="16px" fontWeight="700" color='white'>
      Our Payment Partners
    </Text>
    <Box direction="horizontal" justify="space-between">
      <Box direction="horizontal" gap="40px" width="784px" height="24px">
          <Image src='https://assets.pharmeasy.in/apothecary/images/gpay.png?dim=1440x0' height="18px" />
          <Image src='https://assets.pharmeasy.in/apothecary/images/paytm.png?dim=1440x0' height="18px" />
          <Image src='https://assets.pharmeasy.in/apothecary/images/phonepe.png?dim=1440x0' height="18px" />
          <Image src='https://assets.pharmeasy.in/apothecary/images/amazon.png?dim=1440x0' height="18px" />
          <Image src='https://assets.pharmeasy.in/apothecary/images/mobikwik.png?dim=1440x0' height="18px" />
      </Box>
      <Text color='white' fontSize="18px" fontFamily={'"Open Sans", sans-serif'}>© 2022 Zenoo. All Rights Reserved</Text>
    </Box>
  </Box> */}
  <Text textAlign='center' color='white' mt={5}>Created by Ravi Sharma</Text>
</div>
  );
};

export default Footer;