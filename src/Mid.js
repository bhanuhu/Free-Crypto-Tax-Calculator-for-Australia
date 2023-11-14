import "./Mid.css";
import { Fragment, useState, useEffect } from "react";
import {
  Button,
  Stack,
  Input,
  Text,
  FormControl,
  Grid,
  GridItem,
  Box,
  Select,
  Card,
  CardBody,
  CardHeader,
  Heading
} from "@chakra-ui/react";
import { questionData } from "./questionData";

const Mid = () => {
  const [crypto, setcrypto] = useState("");
  const [discount, setdiscount] = useState("");
  const [purchase, setpurchase] = useState("");
  const [ddown1, setddown1] = useState("");
  const [rateText, setRateText] = useState("0%")
  const [expense, setExpense] = useState("")
const [gamount, setgamount] = useState("")
const [shortTermClr, setShortTermClr] = useState(false)
const [netCapAmnt, setNetCapAmnt] = useState("")
const [needPay, setNeedPay] = useState("")
  
useEffect(() => {
  if (ddown1 !== undefined) {
    // Update the rateText state based on the selected value in the dropdown
    setRateText({
      0: "0%",
      18200: "Nil + 19% of excess over $18,200",
      45000: "$5,092 + 32.5% of excess over $45,000",
      120000: "$29,467 + 37% of excess over $120,000",
      180000: "$51,667 + 45% of excess over $180,000",
    }[ddown1]);
  }
}, [ddown1]);
  useEffect(() => {
   
      if (crypto && purchase && expense !== undefined) {
      
        let gam = crypto - purchase - expense;
        setgamount(gam)
     
       }

      
     } ,[crypto, purchase, expense]);
    
    const handleShortTerm =() => {
setShortTermClr(true)
setNetCapAmnt(gamount)
setNetCapAmnt(0)
setNeedPay(0)
    }
    useEffect(() => {
      if(gamount> 0){
        let discountAmount = gamount*0.5
        setdiscount(parseInt(discountAmount))
      }else{
        setdiscount(0)
      }
     

      
     } ,[gamount]);

     useEffect(() => {
      if(gamount> 0){
        let netCapAmount = gamount- discount
        setNetCapAmnt(netCapAmount)
       
      }else{
        setNetCapAmnt(0)
        
      }
     } ,[discount, gamount]);
    
 const handleLongTerm =() => {
  setShortTermClr(false)
  if(gamount> 0){
    let netCapAmount = gamount- discount
    setNetCapAmnt(netCapAmount)
    if(rateText==="0%"){
      console.log(rateText)
      setNeedPay(0)
    }else if(rateText === "Nil + 19% of excess over $18,200"){
      console.log(rateText)
  
      setNeedPay(discount*0.19)
    }else if(rateText === "$5,092 + 32.5% of excess over $45,000"){
      console.log(rateText)
  
      setNeedPay(discount*0.325)
    }else if(rateText === "$29,467 + 37% of excess over $120,000"){
      console.log(rateText)
  
      setNeedPay(discount*0.37) 
    }else{
      console.log(rateText)
  
      setNeedPay(discount*0.45)
    }
  
  }else{
    setNetCapAmnt(0)
    setNeedPay(0)
  }
 }
 useEffect(() => {
  if(discount>0){
    console.log('rateText :>> ', rateText);
  if(rateText==="0%"){
    console.log(rateText)
    setNeedPay(0)
  }else if(rateText === "Nil + 19% of excess over $18,200"){
    console.log(rateText)

    setNeedPay(discount*0.19)
  }else if(rateText === "$5,092 + 32.5% of excess over $45,000"){
    console.log(rateText)

    setNeedPay(discount*0.325)
  }else if(rateText === "$29,467 + 37% of excess over $120,000"){
    console.log(rateText)

    setNeedPay(discount*0.37) 
  }else{
    console.log(rateText)

    setNeedPay(discount*0.45)
  }}
else
setNeedPay(0)
 } ,[rateText, discount]);
 console.log(needPay)


  return (
<Fragment>
<Grid backgroundColor="grey">
<Grid
background="white"
    width="100%"
    px="20%"
  justifyContent="center"
      h="100pvh"
      templateRows={{sm:"repeat(1, 1fr)", md:"repeat(1, 1fr)", lg:"repeat(1, 1fr)"}}
      templateColumns={{sm:"repeat(1, 1fr)", md:"repeat(1, 1fr)", lg:"repeat(2, 1fr)"}}
      gap={4}
      pb="2rem"
    >
      <GridItem gap={4}>
        <FormControl>
          <Text pb="5px">Enter purchase price of Crypto</Text>
          <Input
            type="number"
            id="purchase"
            name="purchase"
            variant="filled"
            value={purchase}
            onChange={(event) => {
              setpurchase(event.target.value);
            }}
          />
        </FormControl>
      </GridItem>
      <GridItem gap={4}>
        <FormControl>
          <Text pb="5px">Enter sale price of Crypto</Text>
          <Input
             type="number"
            id="crypto"
            variant="filled"
            name="crypto"
            value={crypto}
            onChange={(event) => {
              setcrypto(event.target.value);
            }}
          />
        </FormControl>
      </GridItem>
      <GridItem gap={4}>
        <FormControl>
          <Text pb="5px">Enter Your Expenses</Text>
          <Input
             type="number"
            id="expense"
            name="expense"
            variant="filled"
            value={expense}
            onChange={(event) => {
              setExpense(event.target.value);
            }}
          />
        </FormControl>
      </GridItem>
      <GridItem>
        <Text pb="5px">Investment Type</Text>
        <Stack direction="row" spacing={4} align="center">
          <Box>
            <Button
              colorScheme={shortTermClr ? "blue" : "grey"}
              variant="outline"
              id="stbut"
              onClick={handleShortTerm}
            >
              Short Term
            </Button>
            <Text>&lt; 12 month</Text>
          </Box>
          <Box>
            <Button
            colorScheme={!shortTermClr ? "blue" : "grey"}
              variant="outline"
              id="ltbut"
              onClick={handleLongTerm}
            >
              Long Term
            </Button>
            <Text>&gt; 12 month</Text>
          </Box>
        </Stack>
      </GridItem>
      <GridItem gap={4}>
        <FormControl>
          <Text pb="5px">Select your Annual Income</Text>
          <Select
            id="mydropdown"
            onChange={(event) => {
              setddown1(event.target.value);
            }}
          >
            <option value="0">$0-$18,200</option>
            <option value="18200">$18,201-$45,000</option>
            <option value="45000">$45,001-$1,20,000</option>
            <option value="120000">$1,20,001-$1,80,000</option>
            <option value="180000">$1,80,001+</option>
          </Select>
        </FormControl>
      </GridItem>
      <GridItem gap={4}>
        <FormControl>
          <Text pb="5px">Tax Rate</Text>
          <Input
             type="text"
            id="rate"
            name="rate"
            value={rateText}
            readOnly
            variant="filled"
          />
        </FormControl>
      </GridItem>
      {
        !shortTermClr && 
        <Fragment><GridItem gap={4}>
        <FormControl>
          <Text pb="5px">Capital gain Amount</Text>
          <Input  type="number" id="gamount" name="gamount" variant="filled" value={gamount} readOnly />
        </FormControl>
      </GridItem>
      <GridItem gap={4}>
        <FormControl>
          <Text pb="5px">Discount for long term gains</Text>
          <Input
             type="number"
            id="discount"
            name="discount"
            variant="filled"
            value={discount}
            onChange={(event) => {
              setdiscount(event.target.value);
            }
          
          }
          readOnly
          />
        </FormControl>
      </GridItem></Fragment>
      }
      
      <GridItem gap={4}>
      <Card background="rgb(235,249,244)">
  <CardHeader mb="-20px" textAlign="center">
    <Text>Net Captial gains tax amount.</Text>
  </CardHeader>
  <CardBody as="b" mt="-20px" textAlign="center"  fontSize="20px" color="rgb(15,186,131)">{netCapAmnt}</CardBody>
</Card>
      </GridItem>
      <GridItem gap={4}>
      <Card background="rgb(235,242,255)">
  <CardHeader textAlign="center" mb="-20px">
    <Text>The tax you need to pay*</Text>
  </CardHeader>
  <CardBody mt="-20px" as="b" fontSize="20px" textAlign="center" color="rgb(15,76,210)">{needPay}</CardBody>
</Card>
      </GridItem>
    </Grid>
    <Card px="4rem">
      <Heading as="h2" pb="3rem">Frequently Asked Questions</Heading>
      
      {questionData && questionData?.map((item) => (
        <FormControl>
        <Text as="b" key ={item.id}>
          {item.id}.&nbsp;
        </Text>
        <Text as="b">
          {item.ques}
        </Text>
        <Text>{item.ans}</Text>
        </FormControl>
      ))}

      
    </Card>
</Grid>
</Fragment>
    
  );
};
export default Mid;
