
import './App.css';
import Mid from './Mid';

// 1. import `ChakraProvider` component
import { ChakraProvider, Heading } from '@chakra-ui/react'

 
function App() {
  return (
    <ChakraProvider>

    <div className="App">
      <div className='inner'>
      <Heading as="h1" textAlign="center" mb="2rem">Free Crypto Tax Calculator Australia</Heading>
      <Mid className='midd'></Mid>
    

  
      </div>

          </div>

</ChakraProvider>

  );
}

export default App;
