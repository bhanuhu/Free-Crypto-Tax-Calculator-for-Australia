import logo from './logo.svg';
import './App.css';
import Top from './Top';
import Bottom from './Bottom';

import Mid from './Mid';

// 1. import `ChakraProvider` component
import { ChakraProvider, Heading } from '@chakra-ui/react'

 
function App() {
  return (
    <ChakraProvider>

    <div className="App">
      <div className='inner'>
      <Heading as="h1" textAlign="center" mb="2rem">Free Crypto Tax Calculator Australia</Heading>
      <Top className="topp"></Top>
      <Mid className='midd'></Mid>
    

  
      </div>

          </div>

</ChakraProvider>

  );
}

export default App;
