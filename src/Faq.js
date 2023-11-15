import React from 'react'
import './Faq.css'
import {
    Text,
    FormControl,
    Card,
    Heading
  } from "@chakra-ui/react";
  import { questionData } from "./questionData";

const Faq = () => {
  return (
    <Card className='faq-container'>
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
  )
}

export default Faq
