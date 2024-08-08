import React from 'react';
import {
  Flex, Box,
} from '@chakra-ui/react';
import backgroundImage from '../assets/images/portfolio-bg.jpg';

function A4Box() {
  return (
    <Flex
      justify="center"
      align="center"
      height="100vh"
      overflow="auto"
      backgroundColor="gray.900"
    >
      <Box
        width="calc(100vh * (210 / 297))"
        height="100vh"
        maxWidth="100%"
        border="1px solid black"
        backgroundImage={`url(${backgroundImage})`}
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
      />
    </Flex>
  );
}

export default A4Box;
