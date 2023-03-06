/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import {
  Box, Center, Divider, Stack, Text,
} from '@chakra-ui/react';
import './App.css';

function App() {
  return (
    <div className="App">
      <Center className="line" pos="absolute" backgroundColor="#0f0e0ea1" zIndex="1" width="100%" height="100vh">
        <Stack direction="column" h="100px" p={4} spacing={2}>
          <Text className="lineUp" fontSize="6xl" zIndex="1" color="white" align="center">Aadesh Raj Sharma</Text>
          <Divider className="right" orientation="horizontal" />

        </Stack>
      </Center>

      <Box
        backgroundImage="/bg.jpg"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        position="fixed"
        height="100%"
        width="100%"
      />

    </div>
  );
}

export default App;
