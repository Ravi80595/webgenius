import { Box,Flex,Image,Text } from '@chakra-ui/react'
import React from 'react'
import '../../CSS/HomePage.css'



const Techs =()=>{

  


return(
    <Box  pt='88px' pb='35px'>
      <Flex mb={'20px'} justifyContent={'center'}>
        <Image src='https://demo.rstheme.com/wordpress/tekone/wp-content/uploads/2023/03/heart_beat_graph_dark.svg'/>
        <Text color={'#323F7C'} fontSize={['12px','12px','20px','20px']} fontWeight={'700'} fontFamily={'"Space Grotesk", Sans-serif'}>What Technology We Are Using For Our Valued Customers</Text>
        <Image src='https://demo.rstheme.com/wordpress/tekone/wp-content/uploads/2023/03/heart_beat_graph_dark.svg'/>
      </Flex>
      <Box backgroundColor={'#f8f8f8'} pt={10} pb={10}>
        <Text marginLeft={10} fontSize={'16px'} fontFamily={'"Space Grotesk",sans-serif'} fontWeight={'600'}>Website Development</Text><br></br>
        <Flex justifyContent={'space-around'} direction={['column','column','row','row']}>
        <Box>
          <Image w={'50px'} h={'40px'} src='https://ravi80595.github.io/static/media/htmllogo.2ba4fabc69a89a8f71e6.png'/>
          <Text textAlign={'center'} mt={[0,0,0,2]} fontWeight={'600'}>HTML</Text></Box>
          <Box>
          <Image w={'50px'} h={'40px'} src='https://ravi80595.github.io/static/media/csslogo.69a82c2d9e45c933a9cb.png'/>
          <Text textAlign={'center'} mt={2} fontWeight={'600'}>CSS</Text></Box>
          <Box>
          <Image w={'50px'} h={'40px'} src='https://ravi80595.github.io/static/media/javascriptlogo.1ccd6ef9bb1f9c84ef00.png'/>
          <Text textAlign={'center'} mt={2} fontWeight={'600'}>Javascript</Text></Box>
          <Box>
          <Image w={'50px'} h={'40px'} src='https://ravi80595.github.io/static/media/reactlogo.0cf951a69d8e58f83f9d.png'/>
          <Text textAlign={'center'} mt={2} fontWeight={'600'}>ReactJs</Text></Box>
          <Box>
          <Image w={'50px'} h={'40px'} src='https://ravi80595.github.io/static/media/nodelogo.952a9ea986dcfa5229ad.png'/>
          <Text textAlign={'center'} mt={2} fontWeight={'600'}>NodeJS</Text></Box>
          <Box>
          <Image w={'50px'} h={'40px'} src='https://ravi80595.github.io/static/media/githublogo.3b9e32903aa89111875d.png'/>
          <Text textAlign={'center'} mt={2} fontWeight={'600'}>GitHub</Text></Box>
          <Box>
          <Image w={'50px'} h={'40px'} src='https://ravi80595.github.io/static/media/chakralogo.be115b2a2bfe791e050c.png'/>
          <Text textAlign={'center'} mt={2} fontWeight={'600'}>ChakraUI</Text></Box>
        </Flex>
      </Box>
      <Flex gap={'20px'} p={10} direction={['column','column','row','row']}>
        <Box w={['99%','99%','33%','33%']} background={'#f8f8f8'} borderRadius={'10px'} p={5}>
          <Text pb={3} fontSize={'16px'} fontFamily={'"Space Grotesk",sans-serif'} fontWeight={'600'}>Mobile Development</Text>
          <Flex pb={'10px'} gap={'30px'}>
          <Box className='hover-3'>
          <Image w={'40px'} h={'30px'} src='https://cdn-icons-png.flaticon.com/512/5968/5968371.png'/>
          <Text textAlign={'center'} mt={2} fontWeight={'600'}>Swift</Text></Box>
          <Box className='hover-3'>
          <Flex justifyContent={'center'}>
          <Image w={'40px'} h={'30px'} src='https://ravi80595.github.io/static/media/reactlogo.0cf951a69d8e58f83f9d.png'/></Flex>
          <Text textAlign={'center'} mt={2} fontWeight={'600'}>ReactNative</Text></Box>
          <Box className='hover-3'>
          <Flex justifyContent={'center'}>
          <Image w={'40px'} h={'30px'} src='https://www.freepnglogos.com/uploads/android-logo-png/android-logo-0.png'/></Flex>
          <Text textAlign={'center'} mt={2} fontWeight={'600'}>Android SDK</Text></Box> 
          <Box className='hover-3'>
          <Image w={'40px'} h={'30px'} src='https://w7.pngwing.com/pngs/537/866/png-transparent-flutter-hd-logo.png'/>
          <Text textAlign={'center'} mt={2} fontWeight={'600'}>Flutter</Text></Box>
          </Flex>
          <Box className='hover-3' mt={5}>
            <Flex justifyContent={'center'}>
          <Image w={'40px'} h={'30px'} src='https://e7.pngegg.com/pngimages/12/992/png-clipart-xamarin-data-cosmos-db-logo-mobile-app-development-xamarin-data-thumbnail.png'/></Flex>
          <Text textAlign={'center'} mt={2} fontWeight={'600'}>Swift</Text></Box>
        </Box>
        <Box w={['99%','99%','33%','33%']} background={'#f8f8f8'} borderRadius={'10px'} p={5}>
          <Text pb={3} fontSize={'16px'} fontFamily={'"Space Grotesk",sans-serif'} fontWeight={'600'}>Utilites</Text>
          <Flex pb={'10px'} gap={'30px'}>
          <Box className='hover-3'>
            <Flex justifyContent={'center'}>
          <Image w={'40px'} h={'30px'} src='https://logos-world.net/wp-content/uploads/2021/02/Google-Analytics-Logo.png'/></Flex>
          <Text textAlign={'center'} mt={2} fontWeight={'600'}>Google Analytics</Text></Box>
          <Box className='hover-3'>
            <Flex justifyContent={'center'}>
          <Image w={'40px'} h={'30px'} src='https://images.ctfassets.net/x78yjrjc11pq/2Ghs0rgoEAzLe07p9lvIsa/226e094a7594181c41597953e92a27b8/twilio_logo_2c883610a9.png'/></Flex>
          <Text textAlign={'center'} mt={2} fontWeight={'600'}>Twilio</Text></Box>
          <Box className='hover-3'>
            <Flex justifyContent={'center'}>
          <Image w={'40px'} h={'30px'} src='https://images.crunchbase.com/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/v1426358818/u8ejo6w7vvi5ectctfjf.png'/></Flex>
          <Text textAlign={'center'} mt={2} fontWeight={'600'}>Lookback</Text></Box>
          <Box className='hover-3'>
            <Flex justifyContent={'center'}>
          <Image w={'40px'} h={'30px'} src='https://img.stackshare.io/service/5801/251374.png'/></Flex>
          <Text textAlign={'center'} mt={2} fontWeight={'600'}>HUB</Text></Box>          
          </Flex>
          <Box className='hover-3' mt={5}>
            <Flex justifyContent={'center'}>
          <Image w={'40px'} h={'30px'} src='https://w7.pngwing.com/pngs/12/32/png-transparent-google-cloud-platform-dataflow-cloud-computing-bigquery-apache-beam-database-blue-logo-electric-blue-thumbnail.png'/></Flex>
          <Text textAlign={'center'} mt={2} fontWeight={'600'}>Dataflow</Text></Box>
        </Box>
        <Box w={['99%','99%','33%','33%']} background={'#f8f8f8'} borderRadius={'10px'} p={5}>
          <Text pb={3} fontSize={'16px'} fontFamily={'"Space Grotesk",sans-serif'} fontWeight={'600'}>Business Tools</Text>
          <Flex pb={'10px'} gap={'30px'} justifyContent={'space-around'}>
          <Box className='hover-3'>
            <Flex justifyContent={'center'}>
          <Image w={'40px'} h={'30px'} src='https://e7.pngegg.com/pngimages/249/19/png-clipart-google-logo-g-suite-google-guava-google-plus-company-text.png'/></Flex>
          <Text textAlign={'center'} mt={2} fontWeight={'600'}>G Suite Kit</Text></Box>
          <Box className='hover-3'>
            <Flex justifyContent={'center'}>
          <Image w={'40px'} h={'30px'} src='https://theme.zdassets.com/theme_assets/776881/60423ade15970610bcf69edc05158ba5d2af6597.png'/></Flex>
          <Text textAlign={'center'} mt={2} fontWeight={'600'}>AdRoll</Text></Box>
          <Box className='hover-3'>
            <Flex justifyContent={'center'}>
          <Image w={'40px'} h={'30px'} src='https://cdn.iconscout.com/icon/free/png-256/free-zapier-282557.png'/></Flex>
          <Text textAlign={'center'} mt={2} fontWeight={'600'}>Zapier</Text></Box>
          <Box className='hover-3'>
            <Flex justifyContent={'center'}>
          <Image w={'40px'} h={'30px'} src='https://1000logos.net/wp-content/uploads/2022/05/Buffer-Logo-Emblem.png'/></Flex>
          <Text textAlign={'center'} mt={2} fontWeight={'600'}>Buffer</Text></Box>
          </Flex>
          <Box className='hover-3' mt={5}>
            <Flex justifyContent={'center'}>
          <Image w={'40px'} h={'30px'} src='https://w7.pngwing.com/pngs/423/261/png-transparent-bing-hd-logo-thumbnail.png'/></Flex>
          <Text textAlign={'center'} mt={2} fontWeight={'600'}>Bing Ads</Text></Box>
        </Box>
      </Flex>
    </Box>
  )
}

export default Techs
