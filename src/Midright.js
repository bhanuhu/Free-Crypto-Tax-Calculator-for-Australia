import { useState } from "react";
import Midleft from "./Midleft";
import { Button, Stack, Input, Text } from '@chakra-ui/react'

const Midright = () => {
  const [crypto, setcrypto] = useState("");
  const [rate, setrate] = useState("");
  const [discount, setdiscount] = useState("");
  const [but, setBut] = useState(false);

  const eitherbutton = () => {

  }

  return (<div>
    <Stack spacing={3}>
      <div>
      <Text>Enter Sale Price of Crypto</Text>
      <Input placeholder='$20,000' variant='filled' fontWeight='500' size='lg' type="number" />

      <input type="text" id="crypto" name="crypto" onChange={(event) => { setcrypto(event.target.value) }}></input>
      </div>
      <div>

      <p>Investment type</p>
      {/* <button className="but1" id="but1" onClick={eitherbutton}>Short Term</button> */}


    <Stack direction='row' spacing={4} align='center'>
        <Button colorScheme={setBut ? "blue" : "grey"} variant='outline' id='stbut'>
          Short Term
        </Button>
        <Button colorScheme={setBut ? "blue" : "grey"} variant='outline' id='ltbut' onClick={eitherbutton}>
          Long Term
        </Button>


      </Stack>
      </div>
      <div>
      <p>Tax Rate</p>
      <input type="text" id="rate" name="rate" value="0%" ></input>
      </div>
      <div>
      <p>Discount for long term gains</p>
      <input type="text" id="discount" name="discount" onChange={(event) => { setdiscount(event.target.value) }}></input>
      </div>



    </Stack>


  </div>

  )
}
export default Midright;