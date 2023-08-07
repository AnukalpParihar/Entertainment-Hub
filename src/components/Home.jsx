import { Box, Container, Heading, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.png';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const headingOptions = {
  pos: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%,-50%)',
  textTransform: 'uppercase',
  p: '4',
  size: '4xl',
};

const Home = () => {
  return (
    <Box>
      <MyCarousel />
      <Container maxW={'container.xl'} minH={'100vh'} p="16">
        <Heading
          textTransform={'uppercase'}
          py="2"
          w={'fit-content'} // text ko center lane k liye
          borderBottom={'2px solid'} //underline k liye
          m="auto"
        >
          Services
        </Heading>

        <Stack
          h={'full'}
          p={'4'}
          alignItems={'center'}
          direction={['column', 'row']}
        >
          <Image src={img5} h={['40', '400']} filter={'hue-rotate(-130deg)'} />
          <Text
            letterSpacing={'widest'}
            lineHeight={'190%'}
            p={['4', '16']}
            textAlign={'center'}
          >
            Welcome to our website, your ultimate destination for all your
            gaming console needs! We are proud to offer a wide range of gaming
            consoles and accessories, including the latest models from all the
            top brands. Whether you're a casual gamer or a serious enthusiast,
            we have everything you need to take your gaming experience to the
            next level. Our collection includes consoles from PlayStation, Xbox,
            Nintendo, and other leading brands, as well as a variety of gaming
            accessories such as controllers, headsets, and charging docks. We
            also provide expert advice and customer support to help you make the
            most out of your console and gaming experience. So why wait? Browse
            our website today to find the perfect gaming console and accessories
            for you. With our competitive pricing, fast shipping, and
            unparalleled customer service, we're confident that you'll love our
            selection and enjoy your gaming experience like never before.
          </Text>
        </Stack>
      </Container>
    </Box>
  );
};
const MyCarousel = () => (
  <Carousel
    autoPlay
    infiniteLoop
    interval={1000}
    showStatus={false}
    showThumbs={false}
    showArrows={false}
  >
    <Box w="full" h={'100vh'}>
      <Image src={img1} h="full" w={'full'} objectFit={'cover'} />
      <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
        Watch The Future
      </Heading>
    </Box>

    {/* </Box> */}
    <Box w="full" h={'100vh'}>
      <Image src={img2} h="full" w={'full'} objectFit={'cover'} />
      <Heading bgColor={'whiteAlpha.900'} color={'black'} {...headingOptions}>
        Future is Gaming
      </Heading>
    </Box>

    <Box w="full" h={'100vh'}>
      <Image src={img3} h="full" w={'full'} objectFit={'cover'} />
      <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
        Gaming on Console
      </Heading>
    </Box>

    <Box w="full" h={'100vh'}>
      <Image src={img4} h="full" w={'full'} objectFit={'cover'} />
      <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
        Night life is cool
      </Heading>
    </Box>
  </Carousel>
);

export default Home;
